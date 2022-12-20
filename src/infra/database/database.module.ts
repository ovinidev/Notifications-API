import { Module } from '@nestjs/common';
import { NotificationsRepository } from '@app/repositories/NotificationsRepository';
import { PrismaService } from './prisma/prisma.service';
import { PrismaNotificationsRepository } from './prisma/repositories/PrismaNotificationsRepository';
import { UserRepository } from '@app/repositories/UserRepository';
import { PrismaUserRepository } from './prisma/repositories/PrismaUserRepository';

@Module({
  providers: [
    PrismaService,
    {
      provide: NotificationsRepository,
      useClass: PrismaNotificationsRepository,
    },
    {
      provide: UserRepository,
      useClass: PrismaUserRepository,
    },
  ],
  exports: [NotificationsRepository, UserRepository],
})
export class DataBaseModule {}
