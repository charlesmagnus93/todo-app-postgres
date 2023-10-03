import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { StreamDescription } from 'typeorm';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = +process.env.APP_PORT || 3000;

  app.setGlobalPrefix('api')

  const options = new DocumentBuilder()
  .addBearerAuth()
  .setTitle("Todo App")
  .setDescription("Todo Api documentation")
  .setVersion("1.0")
  .addTag("Todo")
  .build();

  const document = SwaggerModule.createDocument(app, options);

  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
