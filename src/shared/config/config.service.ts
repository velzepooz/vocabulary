import {
  HttpException,
  HttpStatus,
  INestApplication,
  ValidationPipeOptions,
} from '@nestjs/common';
import helmet from 'helmet';
import dotenv from 'dotenv';
import morgan from 'morgan';
import { ROUTES } from './routes';
import { ConfigServiceInterface } from '../interfaces/config-service.interface';

dotenv.config({ path: `env/${process.env.NODE_ENV || 'development'}.env` });

class ConfigService implements ConfigServiceInterface {
  constructor(private env: { [k: string]: string | undefined }) {}

  ensureValues(keys: string[]): ConfigServiceInterface {
    keys.forEach((k) => this.getValue(k, true));

    return this;
  }

  getPort(): number {
    return +this.getValue('PORT', true);
  }

  getCustomKey(key: string, throwOnMissing = true): string {
    return this.getValue(key, throwOnMissing);
  }

  getValidationOptions(transform?: true): ValidationPipeOptions {
    const options: ValidationPipeOptions = {
      whitelist: true,
      validateCustomDecorators: true,
    };

    if (transform) {
      return {
        ...options,
        stopAtFirstError: false,
        transform: true,
        forbidNonWhitelisted: false,
        transformOptions: {
          enableImplicitConversion: true,
          exposeDefaultValues: true,
        },
      };
    }

    return options;
  }

  configureApp(app: INestApplication): void {
    app.enableCors({
      origin: '*',
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
      allowedHeaders: 'Content-Type, Accept',
    });

    app.setGlobalPrefix(ROUTES.MAIN_PATH);
    app.use(helmet());
    app.use(morgan('tiny'));
  }

  private getValue(key: string, throwOnMissing = true): string {
    const value = this.env[key];

    if (!value && throwOnMissing) {
      throw new HttpException(
        `validation:error. config error - missing env.${key}`,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }

    return value;
  }
}

const configService = new ConfigService(process.env).ensureValues([]);

export { configService };
