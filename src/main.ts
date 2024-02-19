import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { GlobalGuard } from './guards/global.guard';
import { ValidationPipe } from '@nestjs/common';

const useAgentMiddleware = require('./middlewares/useAgent');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.use(useAgentMiddleware);
  app.useGlobalGuards(new GlobalGuard());
  await app.listen(3000, () => {
    console.log('Application is listening on port http://localhost:3000');
  });
}
bootstrap();
