import { Controller, Get, Inject } from '@nestjs/common';
import { GreetingUseCase } from '../../core/ports/in/greeting.use-case';
import { GreetingResponseDto } from '../../core/dto/greeting.dto';

@Controller()
export class GreetingController {
  constructor(
    @Inject('GREETING_USE_CASE')
    private readonly greetingUseCase: GreetingUseCase,
  ) {}

  @Get()
  async getHello(): Promise<GreetingResponseDto> {
    return await this.greetingUseCase.getDefaultGreeting();
  }

  @Get('korean')
  async getKoreanHello(): Promise<GreetingResponseDto> {
    return await this.greetingUseCase.getKoreanGreeting();
  }
}
