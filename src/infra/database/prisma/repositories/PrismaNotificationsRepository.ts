import { Injectable } from '@nestjs/common';
import { Notification } from '@app/entities/notification/notification';
import { NotificationsRepository } from 'src/app/repositories/NotificationsRepository';
import { PrismaService } from '../prisma.service';
import { PrismaNotificationMapper } from '../mappers/PrismaNotificationMapper';

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
    const notifications = await this.prismaService.notification.findMany();

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    return notifications;
  }

  async findById(notificationId: string): Promise<Notification | null> {
    const notification = await this.prismaService.notification.findUnique({
      where: {
        id: notificationId,
      },
    });

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    return notification;
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
}
