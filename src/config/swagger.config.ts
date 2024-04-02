import { NestFastifyApplication } from '@nestjs/platform-fastify';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { swaggerMessages } from 'src/constant/message.constant';

const setupSwagger = function (app: NestFastifyApplication) {
  const config = new DocumentBuilder()
    .setTitle(swaggerMessages.TITLE)
    .setDescription(swaggerMessages.DESCRIPTION)
    .setVersion('v1')
    .setExternalDoc('Postman Collection', '/docs-json')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);
};

export default setupSwagger;
