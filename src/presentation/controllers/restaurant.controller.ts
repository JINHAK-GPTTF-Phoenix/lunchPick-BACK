import { Controller, Get, Query, Inject } from '@nestjs/common';
import { IRestaurantUseCase } from '../../core/ports/in/restaurant.use-case';
import { RestaurantResponseDto } from '../../core/dto/restaurant.dto';

@Controller('restaurants')
export class RestaurantController {
  constructor(
    @Inject('RESTAURANT_USE_CASE')
    private readonly restaurantUseCase: IRestaurantUseCase,
  ) {}

  @Get('search')
  async searchRestaurants(
    @Query('keyword') keyword: string,
  ): Promise<RestaurantResponseDto[]> {
    return await this.restaurantUseCase.findRestaurantsByKeyword(keyword);
  }
}
