import { Injectable } from '@nestjs/common';
import { CheckTelResponseDto } from './dto/app.dto';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  checkTel(tel: string): CheckTelResponseDto {
    return {
      tel: tel,
      check: true,
    };
  }
}
