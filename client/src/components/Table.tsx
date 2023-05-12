import {
  IonCol,
  IonGrid,
  IonIcon,
  IonItem,
  IonItemOption,
  IonItemOptions,
  IonItemSliding,
  IonList,
  IonRow,
} from '@ionic/react';
import { trash } from 'ionicons/icons';
import React from 'react';

import './Table.css';
import { useErrorAlert } from '../hooks/useErrorAlert';
import type { Word } from '../modules/word/types';
import { WordService } from '../modules/word/word.service';
import type { Store } from '../store';
import { isHttpRequestError } from '../utils/request';

interface ContainerProps {
  words: Word[];
  deleteWord: Store['deleteWord'];
}

const Table: React.FC<ContainerProps> = ({ words, deleteWord }) => {
  const { setAlert } = useErrorAlert();

  const handleWordRemove = async (id: number) => {
      const result = await WordService.deleteWord(id);
      if (isHttpRequestError(result)) {
        setAlert(result);
        return;
      }
      deleteWord(id);
  };

  return (
    <>
      <IonList>
        {words.map(({ id, word, meaning }) => (
          <IonItemSliding key={id}>
            <IonItem>
              <IonGrid>
                <IonRow>
                  <IonCol className="tr">{word}</IonCol>
                  <IonCol className="tr">{meaning}</IonCol>
                </IonRow>
              </IonGrid>
            </IonItem>

            <IonItemOptions side="end">
              {/* TODO: add additional info in future*/}
              {/*<IonItemOption>*/}
              {/*  <IonIcon slot="icon-only" icon={informationCircle}></IonIcon>*/}
              {/*</IonItemOption>*/}
              <IonItemOption color="danger">
                <IonIcon slot="icon-only" icon={trash} onClick={() => handleWordRemove(id)}></IonIcon>
              </IonItemOption>
            </IonItemOptions>
          </IonItemSliding>
        ))}
      </IonList>
    </>
  );
};

export default Table;
