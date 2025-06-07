import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as cookieParser from 'cookie-parser'

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {bufferLogs: true});
  app.useGlobalPipes(new ValidationPipe({transform: true}))
  app.use(cookieParser());
  // app.useLogger(app.get(Logger))
  const configService = app.get(ConfigService)
  await app.listen(configService.getOrThrow('PORT'));
}
bootstrap();
