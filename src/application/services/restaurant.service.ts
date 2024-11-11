import {
  Injectable,
  Inject,
  Logger,
  BadRequestException,
  InternalServerErrorException,
} from '@nestjs/common';
import { IRestaurantUseCase } from '../../core/ports/in/restaurant.use-case';
import { RestaurantPort } from '../../core/ports/out/restaurant.port';
import { RestaurantResponseDto } from '../../core/dto/restaurant.dto';
import { SearchRestaurantQuery } from '../../core/dto/search-restaurant.query';

@Injectable()
export class RestaurantService implements IRestaurantUseCase {
  private readonly logger = new Logger(RestaurantService.name);

  constructor(
    @Inject('RESTAURANT_PORT')
    private readonly restaurantPort: RestaurantPort,
  ) {}

  async findRestaurantsByKeyword(
    keyword: string,
  ): Promise<RestaurantResponseDto[]> {
    try {
      if (typeof keyword !== 'string') {
        throw new BadRequestException('유효하지 않은 검색어 형식입니다.');
      }

      const query = new SearchRestaurantQuery(keyword);
      const restaurants = await this.restaurantPort.findByKeyword(query);

      return restaurants.map((restaurant) =>
        RestaurantResponseDto.from(restaurant.getProperties()),
      );
    } catch (error) {
      this.logger.error(
        `레스토랑 검색 중 오류 발생: ${error.message}`,
        error.stack,
      );

      if (error instanceof BadRequestException) {
        throw error;
      }

      throw new InternalServerErrorException(
        '레스토랑 검색 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.',
      );
    }
  }
}
