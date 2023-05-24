import {
  IonContent,
  IonFab,
  IonFabButton,
  IonHeader,
  IonIcon,
  IonPage,
  IonSearchbar,
  IonTitle,
  IonToolbar,
  useIonModal,
} from '@ionic/react';
import type { OverlayEventDetail } from '@ionic/react/dist/types/components/react-component-lib/interfaces';
import { add } from 'ionicons/icons';
import { useEffect } from 'react';

import { CreateWordModal, ModalButtonsRoleEnum } from '../components/CreateWordModal';
import Table from '../components/Table';
import { useErrorAlert } from '../hooks/useErrorAlert';
import type { Word } from '../modules/word/types';
import type { createWordDataType} from '../modules/word/word.service';
import { WordService } from '../modules/word/word.service';
import { useStore } from '../store';
import { isHttpRequestError } from '../utils/request';

const Words: React.FC = () => {
  const words = useStore((state) => state.words);
  const setWords = useStore((state) => state.setWords);
  const deleteWord = useStore((state) => state.deleteWord);
  const addWord = useStore((state) => state.addWord);
  const { setAlert } = useErrorAlert();
  const [present, dismiss] = useIonModal(CreateWordModal, {
    onDismiss: (data: createWordDataType | null, role: ModalButtonsRoleEnum) => dismiss(data, role),
  });

  const fetchWords = async (search?: string): Promise<void> => {
    const data = await WordService.getWordsList(search);
    if (isHttpRequestError(data)) {
      setAlert(data);
      return;
    }
    setWords(data as Word[]);
  };

  const handleSearch = async (ev: Event): Promise<void> => {
    const target = ev.target as HTMLIonSearchbarElement;
    if (target) {
      await fetchWords(target.value!.toLowerCase());
    }
  };

  const openModal = (): void => {
    present({
      onWillDismiss: async (ev: CustomEvent<OverlayEventDetail>) => {
        if (ev.detail.role === ModalButtonsRoleEnum.CREATE) {
          const data = await WordService.createWord(ev.detail.data);
          if (isHttpRequestError(data)) {
            setAlert(data);
            return;
          }
          addWord(data)
        }
      },
    });
  }

  useEffect(() => {
    fetchWords();
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Words</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonSearchbar
          animated={true}
          placeholder="Search word"
          debounce={500}
          onIonInput={(event) => handleSearch(event)}
        ></IonSearchbar>
        <Table words={words} deleteWord={deleteWord} />
        <IonFab slot="fixed" vertical="bottom" horizontal="start">
          <IonFabButton>
            <IonIcon icon={add} onClick={() => openModal()}></IonIcon>
          </IonFabButton>
        </IonFab>
      </IonContent>
    </IonPage>
  );
};

export default Words;
