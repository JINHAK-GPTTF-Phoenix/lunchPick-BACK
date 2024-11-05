import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { Logger } from '@nestjs/common';

async function setupCors(app, configService: ConfigService) {
  const corsConfig = configService.get('cors');
  const frontendUrl = configService.get('frontend.url');

  app.enableCors({
    origin: frontendUrl,
    credentials: corsConfig.credentials,
    methods: corsConfig.allowedMethods,
    allowedHeaders: corsConfig.allowedHeaders,
  });
}

async function bootstrap() {
  const logger = new Logger('Bootstrap');
  const app = await NestFactory.create(AppModule);
  
  const configService = app.get(ConfigService);
  const port = configService.get('port');

  // CORS 설정
  await setupCors(app, configService);

  await app.listen(port);
  logger.log(`Application is running on port ${port}`);
}

bootstrap().catch((error) => {
  new Logger('Bootstrap').error('Failed to start application', error);
});
