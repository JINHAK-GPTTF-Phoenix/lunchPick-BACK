export class Restaurant {
  constructor(
    private readonly id: number,
    private readonly name: string,
    private readonly rating: number,
    private readonly color: string,
    private readonly tag: string,
  ) {}

  static create(params: {
    id: number;
    name: string;
    rating: number;
    color: string;
    tag: string;
  }): Restaurant {
    return new Restaurant(
      params.id,
      params.name,
      params.rating,
      params.color,
      params.tag,
    );
  }

  getProperties() {
    return {
      id: this.id,
      name: this.name,
      rating: this.rating,
      color: this.color,
      tag: this.tag,
    };
  }
}
