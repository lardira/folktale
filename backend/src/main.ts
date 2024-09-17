import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestFastifyApplication } from '@nestjs/platform-fastify';

(async () => {
  const app = await NestFactory.create<NestFastifyApplication>(AppModule);
  app.enableCors();

  await app.listen(3000);
})();
