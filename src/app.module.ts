import { Module } from '@nestjs/common';
import { GreetingController } from './presentation/controllers/greeting.controller';
import { GreetingService } from './application/services/greeting.service';
import { GreetingRepository } from './infrastructure/adapters/greeting.repository';

@Module({
  imports: [],
  controllers: [GreetingController],
  providers: [
    {
      provide: 'GREETING_USE_CASE',
      useClass: GreetingService,
    },
    {
      provide: 'GREETING_PORT',
      useClass: GreetingRepository,
    },
  ],
})
export class AppModule {}
