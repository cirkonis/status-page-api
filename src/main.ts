import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// @ts-ignore
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(3000);
  console.log('App running on 3000')
}
bootstrap();
