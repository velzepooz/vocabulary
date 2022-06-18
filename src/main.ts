import { NestFactory } from '@nestjs/core';
import { useContainer } from 'class-validator';
import { AppModule } from './app.module';
import { configService } from './shared/config/config.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  /** All app logic(swagger, exception filters, etc. can be added here) */
  configService.configureApp(app);

  /** class-validator requires you to use service containers
   * if you want to inject dependencies into your custom validator constraint classes */
  useContainer(app.select(AppModule), { fallbackOnErrors: true });

  await app.listen(configService.getPort());
}

bootstrap();
