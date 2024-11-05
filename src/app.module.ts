import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import configuration from './config/configuration';
import { RestaurantController } from './presentation/controllers/restaurant.controller';
import { RestaurantService } from './application/services/restaurant.service';
import { RestaurantRepository } from './infrastructure/adapters/restaurant.repository';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
  ],
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
