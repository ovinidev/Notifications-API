import { User, UserProps } from '../../../entities/user/user';
import { UserRepository } from '../../../repositories/UserRepository';
import { CreateUserBody } from '../../../../infra/http/dtos/createUserBody';
import { Injectable } from '@nestjs/common';
import { hash } from 'bcrypt';

@Injectable()
export class CreateUserUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute({ email, name, password }: CreateUserBody): Promise<UserProps> {
    const userAlreadyExists = await this.userRepository.findByEmail(email);

    if (userAlreadyExists) {
      throw new Error('User already exists');
    }

    const hashPassword = await hash(password, 8);

    const user = new User({
      email,
      name,
      password: hashPassword,
    });

    await this.userRepository.create(user);

    return {
      name,
      email,
      password,
    };
  }
}
