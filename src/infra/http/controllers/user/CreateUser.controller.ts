import { CreateUserUseCase } from '@app/useCases/user/CreateUser/CreateUserUseCase';
import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { CreateUserBody } from '../../dtos/createUserBody';

@Controller('users')
export class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  @Post()
  async create(@Body() body: CreateUserBody) {
    try {
      return await this.createUserUseCase.execute(body);
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
