import { Injectable } from '@nestjs/common';
import { GreetingPort } from '../../core/ports/out/greeting.port';
import { Greeting } from '../../core/domain/greeting.entity';

@Injectable()
export class GreetingRepository implements GreetingPort {
  async getDefaultGreeting(): Promise<Greeting> {
    return Greeting.createDefaultGreeting();
  }

  async getKoreanGreeting(): Promise<Greeting> {
    return Greeting.createKoreanGreeting();
  }
}
