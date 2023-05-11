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
import { add } from 'ionicons/icons';
import { useEffect } from 'react';

import { CreateWordModal } from '../components/CreateWordModal';
import Table from '../components/Table';
import { useErrorAlert } from '../hooks/useErrorAlert';
import type { Word } from '../modules/word/types';
import { WordService } from '../modules/word/word.service';
import { useStore } from '../store';
import { isHttpRequestError } from '../utils/request';

const Main: React.FC = () => {
  const words = useStore((state) => state.words);
  const setWords = useStore((state) => state.setWords);
  const deleteWord = useStore((state) => state.deleteWord);
  const { setAlert } = useErrorAlert();
  const [present, dismiss] = useIonModal(CreateWordModal, {
    onDismiss: (data: string, role: string) => dismiss(data, role),
  });

  function openModal() {
    present({
      // onWillDismiss: (ev: CustomEvent) => {
      //   if (ev.detail.role === 'confirm') {
      //     setMessage(`Hello, ${ev.detail.data}!`);
      //   }
      // },
    });
  }

  useEffect(() => {
    const fetchWords = async () => {
      const data = await WordService.getWordsList();
      if (isHttpRequestError(data)) {
        setAlert(data);
        return;
      }

      setWords(data as Word[]);
    };

    fetchWords();
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonSearchbar animated={true} placeholder="Search word"></IonSearchbar>
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

export default Main;
