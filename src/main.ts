import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import expressBasicAuth from 'express-basic-auth';
import { ADMIN_LOGIN, ADMIN_PASSWORD } from './config';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(
    expressBasicAuth({
      users: { [ADMIN_LOGIN]: ADMIN_PASSWORD },
      challenge: true,
    }),
  );
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
