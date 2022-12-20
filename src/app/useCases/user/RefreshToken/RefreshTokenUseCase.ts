import { SECRET_KEY } from '../../../constants/secretKey';
import { Injectable } from '@nestjs/common';
import { sign, verify } from 'jsonwebtoken';

interface ITokenVerified {
  sub: string;
}

@Injectable()
export class RefreshTokenUseCase {
  async execute(refreshToken: string) {
    const [, refreshTokenWithoutBearer] = refreshToken.split(' ');

    const { sub: id } = verify(
      refreshTokenWithoutBearer,
      SECRET_KEY,
    ) as ITokenVerified;

    const token = sign({}, SECRET_KEY, {
      subject: id,
      expiresIn: '1h',
    });

    const newRefreshToken = sign({}, SECRET_KEY, {
      subject: id,
      expiresIn: '30d',
    });

    const response = {
      token,
      refreshToken: newRefreshToken,
    };

    return response;
  }
}
