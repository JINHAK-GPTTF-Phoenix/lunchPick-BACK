// example.controller.ts

import { Controller, Get } from '@nestjs/common';

@Controller('example')
export class ExampleController {
  @Get()
  getHello(): string {
    return 'Hello, this is a test endpoint for code review!';
  }
}
