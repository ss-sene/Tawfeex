import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors(); // 🔥 Permet les requêtes depuis d'autres domaines (ton app mobile)


  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
