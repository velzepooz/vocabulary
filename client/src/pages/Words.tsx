import type {IonInfiniteScrollCustomEvent} from '@ionic/core/dist/types/components';
import {
  IonContent,
  IonFab,
  IonFabButton,
  IonHeader,
  IonIcon, IonInfiniteScroll, IonInfiniteScrollContent,
  IonPage,
  IonSearchbar,
  IonTitle,
  IonToolbar,
  useIonModal,
} from '@ionic/react';
import type { OverlayEventDetail } from '@ionic/react/dist/types/components/react-component-lib/interfaces';
import { add } from 'ionicons/icons';
import {useCallback, useEffect} from 'react';

import { CreateWordModal, ModalButtonsRoleEnum } from '../components/CreateWordModal';
import Table from '../components/Table';
import { useErrorAlert } from '../hooks/useErrorAlert';
import type { Word } from '../modules/word/types';
import type { createWordDataType} from '../modules/word/word.service';
import { WordService } from '../modules/word/word.service';
import { useStore } from '../store';
import { isHttpRequestError } from '../utils/request';

type fetchWordsType = {
  search?: string;
  lastId?: number;
};

const Words: React.FC = () => {
  const words = useStore((state) => state.words);
  const clearWords = useStore((state) => state.clearWords);
  const setWords = useStore((state) => state.setWords);
  const deleteWord = useStore((state) => state.deleteWord);
  const addWord = useStore((state) => state.addWord);
  const { setAlert } = useErrorAlert();
  const [present, dismiss] = useIonModal(CreateWordModal, {
    onDismiss: (data: createWordDataType | null, role: ModalButtonsRoleEnum) => dismiss(data, role),
  });

  const fetchWords = async ({search, lastId}: fetchWordsType): Promise<Word[]> => {
    const data = await WordService.getWordsList({search, cursor: lastId});
    if (isHttpRequestError(data)) {
      setAlert(data);
      return [];
    }
    return data;
  };

  const handleSearch = useCallback(async (ev: Event): Promise<void> => {
    const target = ev.target as HTMLIonSearchbarElement;
    if (target) {
      const foundWords = await fetchWords({search: target.value?.toLowerCase()});
      clearWords();
      setWords(foundWords);
    }
  }, []);

  const openModal = useCallback(() => {
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
  }, []);

  const handleInfinityScroll = useCallback(async (ev: IonInfiniteScrollCustomEvent<void>) => {
    const wordsFromServer = await fetchWords({lastId: words[words.length - 1].id});
    setWords(wordsFromServer as Word[]);

    ev.target.complete()
  }, [words]);

  useEffect(() => {
    (async () => {
      const wordsFromServer = await fetchWords({});
      setWords(wordsFromServer as Word[]);
    })();
  }, []);

  return (
    <IonPage>
      <IonContent fullscreen>
        <IonSearchbar
          animated={true}
          placeholder="Search word"
          debounce={500}
          onIonInput={handleSearch}
        ></IonSearchbar>
        <Table words={words} deleteWord={deleteWord}/>
        <IonInfiniteScroll onIonInfinite={handleInfinityScroll}>
          <IonInfiniteScrollContent></IonInfiniteScrollContent>
        </IonInfiniteScroll>
        <IonFab slot="fixed" vertical="bottom" horizontal="end">
          <IonFabButton>
            <IonIcon icon={add} onClick={openModal}></IonIcon>
          </IonFabButton>
        </IonFab>
      </IonContent>
    </IonPage>
  );
};

export default Words;
