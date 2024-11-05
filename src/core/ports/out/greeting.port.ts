import { Greeting } from '../../domain/greeting.entity';

export interface GreetingPort {
  getDefaultGreeting(): Promise<Greeting>;
  getKoreanGreeting(): Promise<Greeting>;
}
