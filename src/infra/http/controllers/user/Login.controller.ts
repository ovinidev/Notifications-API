import { LoginUseCase } from '@app/useCases/user/Login/LoginUseCase';
import { LoginUserBody } from '@infra/http/dtos/loginUserBody';
import { Body, Controller, Post } from '@nestjs/common';

@Controller('login')
export class LoginController {
  constructor(private loginUseCase: LoginUseCase) {}

  @Post()
  async handle(@Body() body: LoginUserBody) {
    return await this.loginUseCase.execute(body);
  }
}
