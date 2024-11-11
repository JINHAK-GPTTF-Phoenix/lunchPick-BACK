export class RestaurantResponseDto {
  constructor(
    public readonly id: number,
    public readonly name: string,
    public readonly rating: number,
    public readonly color: string,
    public readonly tag: string,
  ) {}

  static from(restaurant: {
    id: number;
    name: string;
    rating: number;
    color: string;
    tag: string;
  }): RestaurantResponseDto {
    return new RestaurantResponseDto(
      restaurant.id,
      restaurant.name,
      restaurant.rating,
      restaurant.color,
      restaurant.tag,
    );
  }
}
