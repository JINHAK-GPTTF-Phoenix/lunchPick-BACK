import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getKoreanHello(): object {
    return { message: '안녕' };
  }
}
