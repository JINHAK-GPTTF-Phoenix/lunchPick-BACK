import { Injectable, Inject } from '@nestjs/common';
import { RestaurantUseCase } from '../../core/ports/in/restaurant.use-case';
import { RestaurantPort } from '../../core/ports/out/restaurant.port';
import { RestaurantResponseDto } from '../../core/dto/restaurant.dto';

@Injectable()
export class RestaurantService implements RestaurantUseCase {
  constructor(
    @Inject('RESTAURANT_PORT')
    private readonly restaurantPort: RestaurantPort,
  ) {}

  async searchRestaurantsByKeyword(
    keyword: string,
  ): Promise<RestaurantResponseDto[]> {
    const restaurants = await this.restaurantPort.findByKeyword(keyword);
    return restaurants.map((restaurant) =>
      RestaurantResponseDto.from(restaurant.getProperties()),
    );
  }
}
