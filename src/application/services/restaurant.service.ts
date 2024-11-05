import { Injectable, Inject } from '@nestjs/common';
import { IRestaurantUseCase } from '../../core/ports/in/restaurant.use-case';
import { RestaurantPort } from '../../core/ports/out/restaurant.port';
import { RestaurantResponseDto } from '../../core/dto/restaurant.dto';

@Injectable()
export class RestaurantService implements IRestaurantUseCase {
  constructor(
    @Inject('RESTAURANT_PORT')
    private readonly restaurantPort: RestaurantPort,
  ) {}

  async findRestaurantsByKeyword(
    keyword: string,
  ): Promise<RestaurantResponseDto[]> {
    try {
      if (!keyword || typeof keyword !== 'string') {
        throw new Error('유효한 키워드를 입력해야 합니다.');
      }

      const restaurants = await this.restaurantPort.findByKeyword(keyword);
      return restaurants.map((restaurant) =>
        RestaurantResponseDto.from(restaurant.getProperties()),
      );
    } catch (error) {
      // 로깅 구현
      throw new Error('레스토랑 검색 중 오류가 발생했습니다.');
    }
  }
}
