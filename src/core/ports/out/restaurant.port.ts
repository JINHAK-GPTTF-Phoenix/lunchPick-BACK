import { Restaurant } from '../../domain/restaurant.entity';
import { SearchRestaurantQuery } from '../../dto/search-restaurant.query';

export interface RestaurantPort {
  findByKeyword(query: SearchRestaurantQuery): Promise<Restaurant[]>;
}
