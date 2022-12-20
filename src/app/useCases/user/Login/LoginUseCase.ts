import { SECRET_KEY } from '../../../constants/secretKey';
import { UserRepository } from '../../../repositories/UserRepository';
import { LoginUserBody } from '../../../../infra/http/dtos/loginUserBody';
import { Injectable } from '@nestjs/common';
import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';

@Injectable()
export class LoginUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute({ email, password }: LoginUserBody) {
    const user = await this.userRepository.findByEmail(email);

    if (!user) throw new Error('Email or password incorrect');

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) throw new Error('Email or password incorrect');

    const token = sign({}, SECRET_KEY, {
      subject: user.id,
      expiresIn: '1h',
    });

    const refreshToken = sign({}, SECRET_KEY, {
      subject: user.id,
      expiresIn: '30d',
    });

    const response = {
      name: user.name,
      email: user.email,
      token,
      refreshToken,
    };

    return response;
  }
}
