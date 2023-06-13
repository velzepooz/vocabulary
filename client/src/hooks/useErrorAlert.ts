import { useIonAlert } from '@ionic/react';

import { errorStatusCodes } from '../constants/errorStatusCodes';
import type { HttpRequestError } from '../utils/request';

export function useErrorAlert(): {setAlert: any} {
  const [presentAlert] = useIonAlert();

  const setAlert = async (error: HttpRequestError) => {
    await presentAlert({
      header: 'Error',
      subHeader: [errorStatusCodes.appClientError, errorStatusCodes.internalServerError, errorStatusCodes.appServerError].includes(error.code)
        ? 'Network error'
        : 'Oops. You enter incorrect value. Try again.',
      message: [errorStatusCodes.appClientError, errorStatusCodes.internalServerError, errorStatusCodes.appServerError].includes(error.code)
        ? 'Please, try later'
        : error.message,
      buttons: ['OK'],
    });
  };

  return {
    setAlert
  };
}
