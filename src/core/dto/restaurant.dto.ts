export class RestaurantResponseDto {
  constructor(
    public readonly idx: number,
    public readonly name: string,
    public readonly rating: number,
    public readonly color: string,
    public readonly tag: string,
  ) {}

  static from(restaurant: {
    idx: number;
    name: string;
    rating: number;
    color: string;
    tag: string;
  }): RestaurantResponseDto {
    return new RestaurantResponseDto(
      restaurant.idx,
      restaurant.name,
      restaurant.rating,
      restaurant.color,
      restaurant.tag,
    );
  }
}
