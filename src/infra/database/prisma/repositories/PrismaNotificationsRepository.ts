import { Injectable } from '@nestjs/common';
import { Notification } from 'src/app/entities/notification/notification';
import { NotificationsRepository } from 'src/app/repositories/NotificationsRepository';
import { PrismaService } from '../prisma.service';

@Injectable()
export class PrismaNotificationsRepository implements NotificationsRepository {
  constructor(private prismaService: PrismaService) {}

  async create(notification: Notification): Promise<void> {
    await this.prismaService.notification.create({
      data: {
        id: notification.id,
        category: notification.category,
        content: notification.content.value,
        recipientId: notification.recipientId,
        readAt: notification.readAt,
        createdAt: notification.createdAt,
      },
    });
  }

  async findAll(): Promise<Notification[]> {
    const notifications = await this.prismaService.notification.findMany();

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    return notifications;
  }
}
