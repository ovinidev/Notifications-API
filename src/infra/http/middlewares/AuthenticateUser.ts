import { SECRET_KEY } from '@app/constants/secretKey';
import { PrismaService } from '@infra/database/prisma/prisma.service';
import { PrismaUserRepository } from '@infra/database/prisma/repositories/PrismaUserRepository';
import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

interface ITokenVerified {
  sub: string;
}

@Injectable()
export class AuthenticateUser implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    try {
      const authHeader = req.headers.authorization;

      if (!authHeader) {
        return res.status(400).json({ message: 'Token not provided' });
      }

      const [, token] = authHeader.split(' ');

      const { sub: id } = verify(token, SECRET_KEY) as ITokenVerified;

      const userRepository = new PrismaUserRepository(new PrismaService());

      const user = userRepository.findById(id);

      if (!user) {
        return res.status(400).json({ message: 'User not found' });
      }

      next();
    } catch (err: any) {
      return res.status(400).json({ message: err.message });
    }
  }
}
