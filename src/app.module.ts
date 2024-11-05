import { Module } from '@nestjs/common';
import { RestaurantController } from './presentation/controllers/restaurant.controller';
import { RestaurantService } from './application/services/restaurant.service';
import { RestaurantRepository } from './infrastructure/adapters/restaurant.repository';

@Module({
  imports: [],
  controllers: [RestaurantController],
  providers: [
    {
      provide: 'RESTAURANT_USE_CASE',
      useClass: RestaurantService,
    },
    {
      provide: 'RESTAURANT_PORT',
      useClass: RestaurantRepository,
    },
  ],
})
export class AppModule {}
