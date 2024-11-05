import { Injectable, Inject } from '@nestjs/common';
import { GreetingUseCase } from '../../core/ports/in/greeting.use-case';
import { GreetingPort } from '../../core/ports/out/greeting.port';
import { GreetingResponseDto } from '../../core/dto/greeting.dto';

@Injectable()
export class GreetingService implements GreetingUseCase {
  constructor(
    @Inject('GREETING_PORT')
    private readonly greetingPort: GreetingPort,
  ) {}

  async getDefaultGreeting(): Promise<GreetingResponseDto> {
    const greeting = await this.greetingPort.getDefaultGreeting();
    return GreetingResponseDto.from(greeting.getMessage());
  }

  async getKoreanGreeting(): Promise<GreetingResponseDto> {
    const greeting = await this.greetingPort.getKoreanGreeting();
    return GreetingResponseDto.from(greeting.getMessage());
  }
}
