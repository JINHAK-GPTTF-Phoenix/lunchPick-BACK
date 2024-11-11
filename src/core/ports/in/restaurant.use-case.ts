import { RestaurantResponseDto } from '../../dto/restaurant.dto';

/**
 * 레스토랑 사용 사례 인터페이스
 */
export interface IRestaurantUseCase {
  /**
   * 키워드로 레스토랑을 검색합니다.
   * @param keyword 검색할 키워드
   * @returns 레스토랑 응답 DTO 목록
   */
  findRestaurantsByKeyword(keyword: string): Promise<RestaurantResponseDto[]>;
}
