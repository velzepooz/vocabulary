const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

export const sendMessageToTelegram = async (message: string): Promise<void> => {
  try {
    await fetch(
      `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage?chat_id=${TELEGRAM_CHAT_ID}&text=${message}`,
    );
  } catch (e) {
    console.log(e);
  }
};

export const sendErrorToTelegram = async (
  e: {
    context?: string;
    comment?: string;
  } & Error,
): Promise<void> => {
  try {
    const message = `
Error at: ${e.context || ''}
Error: ${e.message}
Stack: ${e.stack}
Comment: ${e.comment || ''}`;

    await fetch(
      encodeURI(
        `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage?chat_id=${TELEGRAM_CHAT_ID}&text=${message}`,
      ),
    );
  } catch (e) {
    console.log(e);
  }
};
