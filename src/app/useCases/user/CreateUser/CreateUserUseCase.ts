import { UserProps } from '@app/entities/user/user';
import { UserRepository } from '@app/repositories/UserRepository';
import { Injectable } from '@nestjs/common';
import { hash } from 'bcrypt';

@Injectable()
export class CreateUserUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute({ email, name, password }: UserProps): Promise<UserProps> {
    const userAlreadyExists = await this.userRepository.findByEmail(email);

    if (userAlreadyExists) {
      throw new Error('User already exists');
    }

    const hashPassword = await hash(password, 8);

    await this.userRepository.create({
      email,
      name,
      password: hashPassword,
    });

    return {
      name,
      email,
      password,
    };
  }
}
