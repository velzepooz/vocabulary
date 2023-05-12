import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonItem,
  IonPage,
  IonTextarea,
  IonTitle,
  IonToolbar
} from '@ionic/react';
import { useState } from 'react';

import type { createWordDataType } from '../modules/word/word.service';

export enum ModalButtonsRoleEnum {
  CLOSE = 'CLOSE',
  CREATE = 'CREATE'
}

interface CreateWordModalProps {
  onDismiss: (data: createWordDataType | null, role: ModalButtonsRoleEnum) => void;
}

export const CreateWordModal: React.FC<CreateWordModalProps> = ({ onDismiss }: CreateWordModalProps) => {
  const [word, setWord] = useState<string>('');
  const [meaning, setMeaning] = useState<string>('');
  const [comment, setComment] = useState<string | null>(null);

  const createWord = () => {
    const createdWord = {
      word,
      meaning,
      comment,
    };
    onDismiss(createdWord, ModalButtonsRoleEnum.CREATE);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonButton color="medium" onClick={() => onDismiss(null, ModalButtonsRoleEnum.CLOSE)}>
              Close
            </IonButton>
          </IonButtons>
          <IonTitle>Create word</IonTitle>
          <IonButtons slot="end">
            <IonButton strong={true} onClick={createWord}>
              Create
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonItem>
          <IonTextarea
            labelPlacement="stacked"
            inputmode="text"
            maxlength={3000}
            minlength={2}
            label="Enter word"
            placeholder="cat"
            autoGrow={true}
            required={true}
            onIonInput={(event) => setWord(event.target.value as string)}
          />
        </IonItem>
        <IonItem>
          <IonTextarea
            labelPlacement="stacked"
            inputmode="text"
            maxlength={3000}
            minlength={2}
            label="Enter meaning"
            placeholder="кіт"
            autoGrow={true}
            required={true}
            onIonInput={(event) => setMeaning(event.target.value as string)}
          />
        </IonItem>
        <IonItem>
          <IonTextarea
            labelPlacement="stacked"
            inputmode="text"
            maxlength={3000}
            minlength={2}
            label="Add comment (optional)"
            placeholder="пухнаста тварина"
            autoGrow={true}
            onIonInput={(event) => setComment(event.target.value as string)}
          ></IonTextarea>
        </IonItem>
      </IonContent>
    </IonPage>
  );
};
