export class ApplicationError extends Error {
  constructor(error: Error) {
    super();

    if (!error) {
      throw new Error('Invalid error');
    }

    Error.captureStackTrace(this, this.constructor);
    this.name = this.constructor.name;
  }
}
