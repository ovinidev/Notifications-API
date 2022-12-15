import { Injectable } from '@nestjs/common';
import { NotificationsRepository } from 'src/app/repositories/NotificationsRepository';
import { PrismaService } from '../prisma.service';
import { PrismaNotificationMapper } from '../mappers/PrismaNotificationMapper';
import { Notification } from '@app/entities/notification/notification';

@Injectable()
export class PrismaNotificationsRepository implements NotificationsRepository {
  constructor(private prismaService: PrismaService) {}

  async create(notification: Notification): Promise<void> {
    const raw = PrismaNotificationMapper.toPrisma(notification);

    await this.prismaService.notification.create({
      data: raw,
    });
  }

  async findAll(): Promise<Notification[]> {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    return await this.prismaService.notification.findMany();
  }

  async findById(notificationId: string): Promise<Notification | null> {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    return await this.prismaService.notification.findUnique({
      where: {
        id: notificationId,
      },
    });
  }

  async update(notification: Notification): Promise<void> {
    const raw = PrismaNotificationMapper.toPrisma(notification);

    this.prismaService.notification.update({
      where: {
        id: notification.id,
      },
      data: raw,
    });
  }

  async countManyByRecipientId(recipientId: string): Promise<number> {
    return this.prismaService.notification.count({
      where: {
        recipientId,
      },
    });
  }

  async findByRecipientId(recipientId: string): Promise<Notification[]> {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    return await this.prismaService.notification.findMany({
      where: {
        recipientId: recipientId,
      },
    });
  }
}
