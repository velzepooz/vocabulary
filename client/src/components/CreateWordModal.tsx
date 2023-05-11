import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonPage,
  IonTextarea,
  IonTitle,
  IonToolbar
} from '@ionic/react';
import { useState } from 'react';

export const CreateWordModal: React.FC = ({ onDismiss }: {
  onDismiss: (data?: string | null | undefined | number, role?: string) => void;
}) => {
  const [word, setWord] = useState<string>('');
  const [meaning, setMeaning] = useState<string>('');
  const [comment, setComment] = useState<string | null>(null);

  const createWord = () => {
    console.log({word})
    console.log({meaning})
    console.log({comment})
    onDismiss(null, 'confirm');
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonButton color="medium" onClick={() => onDismiss(null, 'cancel')}>
              Cancel
            </IonButton>
          </IonButtons>
          <IonTitle>Create word</IonTitle>
          <IonButtons slot="end">
            <IonButton strong={true} onClick={createWord}>
              Confirm
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonItem>
          <IonInput
            type="text"
            inputmode="text"
            maxlength={3000}
            labelPlacement="stacked"
            label="Enter word"
            placeholder="cat"
            onIonInput={(event) => setWord(event.target.value)}
          />
        </IonItem>
        <IonItem>
          <IonInput
            type="text"
            inputmode="text"
            maxlength={3000}
            minlength={2}
            labelPlacement="stacked"
            label="Enter meaning"
            placeholder="кіт"
            onIonInput={(event) => setMeaning(event.target.value)}
          />
        </IonItem>
        <IonItem>
          <IonTextarea
            labelPlacement="stacked"
            maxlength={3000}
            minlength={2}
            label="Add comment (optional)"
            placeholder="пухнаста тварина"
            autoGrow={true}
            onIonInput={(event) => setComment(event.target.value)}
          ></IonTextarea>
        </IonItem>
      </IonContent>
    </IonPage>
  );
};
