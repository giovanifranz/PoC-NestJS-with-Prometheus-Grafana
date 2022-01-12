import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { expressMiddleware as prometheusMiddleware } from 'prometheus-api-metrics';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

const APP_NAME_PREFIX = 'app-name-prefix';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(
    prometheusMiddleware({
      additionalLabels: ['app'],
      extractAdditionalLabelValuesFn: () => ({ app: APP_NAME_PREFIX }),
    }),
  );

  const config = new DocumentBuilder()
    .setTitle('Observability')
    .setDescription('Observability')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);


  await app.listen(5000);
}
bootstrap();
