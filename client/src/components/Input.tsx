import { IonInput, IonItem } from '@ionic/react';

type InputProps = {
  inputType: 'text';
  inputMode?: 'text';
  maxLength?: number;
  minLength?: number;
  label?: string;
  placeholder?: string;
};

export const Input: React.FC = ({inputType = 'text', inputMode, maxLength, minLength, label, placeholder}: InputProps) => {
  return (
    <IonItem>
      <IonInput
        type={inputType}
        inputmode={inputMode}
        maxlength={maxLength}
        minlength={minLength}
        labelPlacement="stacked"
        label={label}
        placeholder={placeholder}
      />
    </IonItem>
  )
};
