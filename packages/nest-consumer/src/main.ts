import { NestFactory } from '@nestjs/core';
import shared from '@learnlerna/shared';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);

  const sh = shared;
  sh();
}
bootstrap();
