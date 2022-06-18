import { INestApplication, ValidationPipeOptions } from '@nestjs/common';

export interface ConfigServiceInterface {
  ensureValues(keys: string[]): ConfigServiceInterface;
  getPort(): number;
  getCustomKey(key: string, throwOnMissing: boolean): string;
  getValidationOptions(transform?: true): ValidationPipeOptions;
  configureApp(app: INestApplication): void;
}
