import { CreateUserUseCase } from '@app/useCases/user/CreateUser/CreateUserUseCase';
import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserBody } from '../../dtos/createUserBody';

@Controller('users')
export class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  @Post()
  async create(@Body() body: CreateUserBody) {
    return this.createUserUseCase.execute(body);
  }
}
