import { GreetingResponseDto } from '../../dto/greeting.dto';

export interface GreetingUseCase {
  getDefaultGreeting(): Promise<GreetingResponseDto>;
  getKoreanGreeting(): Promise<GreetingResponseDto>;
}
