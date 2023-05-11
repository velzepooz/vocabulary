import { errorStatusCodes } from '../constants/errorStatusCodes';

export type HttpRequestError = {
  message: string;
  error: string;
  statusCode: number;
};

type MakeHttpRequestType = {
  url: string;
  options: Pick<RequestInit, 'method'>;
};

export const isHttpRequestError = <T>(response: T | HttpRequestError): response is HttpRequestError => {
  return (response as HttpRequestError).error !== undefined;
}

export const makeHttpRequest = async <T>({
  url,
  options
}: MakeHttpRequestType): Promise<T | HttpRequestError> => {
  try {
    return await (await fetch(url, {...options})).json();
  } catch (e: Error) {
    return {
      error: '',
      message: e.message,
      statusCode: errorStatusCodes.appClientError,
    }
  }
};
