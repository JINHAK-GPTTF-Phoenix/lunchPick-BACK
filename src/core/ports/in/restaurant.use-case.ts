import { RestaurantResponseDto } from '../../dto/restaurant.dto';

export interface RestaurantUseCase {
  searchRestaurantsByKeyword(keyword: string): Promise<RestaurantResponseDto[]>;
}
