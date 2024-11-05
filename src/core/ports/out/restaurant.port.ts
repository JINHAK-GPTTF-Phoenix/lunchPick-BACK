import { Restaurant } from '../../domain/restaurant.entity';

export interface RestaurantPort {
  findByKeyword(keyword: string): Promise<Restaurant[]>;
}
