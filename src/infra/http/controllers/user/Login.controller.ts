import { LoginUseCase } from '@app/useCases/user/Login/LoginUseCase';
import { LoginUserBody } from '@infra/http/dtos/loginUserBody';
import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Post,
} from '@nestjs/common';

@Controller('login')
export class LoginController {
  constructor(private loginUseCase: LoginUseCase) {}

  @Post()
  async handle(@Body() body: LoginUserBody) {
    try {
      return await this.loginUseCase.execute(body);
    } catch (err: any) {
      throw new HttpException(
        {
          status: HttpStatus.UNAUTHORIZED,
          error: err.message,
        },
        HttpStatus.UNAUTHORIZED,
      );
    }
  }
}
