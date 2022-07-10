import { Controller, Get } from '@nestjs/common';

@Controller('cats')
export class AppController {
  @Get('')
  getHome() {
    return {
      title: 'Expanses Application',
      description: 'this is an expanses application to learn nest',
    };
  }

  // @Get()
  // getIncomeReport()
  // {
  // 	return {status: true};
  // }
}
