import { User } from '@app/entities/user/user';
import { UserRepository } from '@app/repositories/UserRepository';
import { Injectable } from '@nestjs/common';
import { PrismaUserMapper } from '../mappers/PrismaUserMapper';
import { PrismaService } from '../prisma.service';

@Injectable()
export class PrismaUserRepository implements UserRepository {
  constructor(private prismaService: PrismaService) {}

  async create(user: User): Promise<void> {
    const raw = PrismaUserMapper.toPrisma(user);
    await this.prismaService.user.create({
      data: raw,
    });
  }

  async findByEmail(email: string): Promise<User | null> {
    const user = await this.prismaService.user.findUnique({
      where: {
        email,
      },
    });

    if (!user) return null;

    return PrismaUserMapper.toDomain(user);
  }
}
