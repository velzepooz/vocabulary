import { errorStatusCodes } from '../constants/errorStatusCodes';

export type HttpRequestError = {
  message: string;
  code: number;
};

type MakeHttpRequestType = {
  url: string;
  options: Pick<RequestInit, 'method' | 'headers'>;
  data?: any;
};

export const isHttpRequestError = <T>(response: T | HttpRequestError): response is HttpRequestError => {
  return (response as HttpRequestError).code !== undefined;
}

export const makeHttpRequest = async <T>({
  url,
  options,
  data,
}: MakeHttpRequestType): Promise<T | HttpRequestError> => {
  try {
    return await (await fetch(
      url,
      {
        ...options,
        ...data && { body: JSON.stringify(data) }
      })).json();
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
  } catch (e: Error) {
    return {
      message: e.message,
      code: errorStatusCodes.appClientError,
    }
  }
};
