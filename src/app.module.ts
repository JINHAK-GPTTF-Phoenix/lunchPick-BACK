import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import configuration from './config/configuration';
import { Restaurant } from './core/domain/restaurant.entity';
import { RestaurantController } from './presentation/controllers/restaurant.controller';
import { RestaurantService } from './application/services/restaurant.service';
import { RestaurantRepository } from './infrastructure/adapters/restaurant.repository';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        ...configService.get('database'),
      }),
      inject: [ConfigService],
    }),
    TypeOrmModule.forFeature([Restaurant]),
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
