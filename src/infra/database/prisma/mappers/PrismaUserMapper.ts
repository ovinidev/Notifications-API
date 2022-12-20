import { User } from '@app/entities/user/user';
import { User as RawUser } from '@prisma/client';

export class PrismaUserMapper {
  static toPrisma(user: User) {
    return {
      name: user.name,
      email: user.email,
      password: user.password,
    };
  }

  static toDomain(raw: RawUser): User {
    return new User({
      email: raw.email,
      name: raw.name,
      password: raw.password,
      id: raw.id,
    });
  }
}
