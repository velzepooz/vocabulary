import { Module } from '@nestjs/common';
import { CONTROLLERS, PROVIDERS } from './modules/general.module';

@Module({
  imports: [],
  controllers: [...CONTROLLERS],
  providers: [...PROVIDERS],
})
export class AppModule {}
