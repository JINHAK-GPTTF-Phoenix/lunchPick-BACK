export class GreetingResponseDto {
  constructor(public readonly message: string) {}

  static from(message: string): GreetingResponseDto {
    return new GreetingResponseDto(message);
  }
}
