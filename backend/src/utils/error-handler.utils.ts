import { ApplicationError } from '../application.error';
import { sendErrorToTelegram } from './send-notification.utils';

export async function httpErrorHandler(error, request, reply): Promise<void> {
  if (error instanceof ApplicationError) {
    await sendErrorToTelegram(error);
    reply.status(512).send({ message: error.message, code: 512 });

    return;
  }

  if (error.validation) {
    reply
      .status(error.statusCode)
      .send({ message: error.message, code: error.statusCode });

    return;
  }

  this.log.error(error);
  await sendErrorToTelegram(error);
  reply.status(500).send({ message: 'Internal Server Error', code: 500 });

  return;
}
