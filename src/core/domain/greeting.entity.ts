export class Greeting {
  constructor(private readonly message: string) {}

  getMessage(): string {
    return this.message;
  }

  static createKoreanGreeting(): Greeting {
    return new Greeting('안녕');
  }

  static createDefaultGreeting(): Greeting {
    return new Greeting('Hello World!');
  }
}
