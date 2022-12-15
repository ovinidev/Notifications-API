import { Content } from '@app/entities/notification/content';
import { Notification } from '@app/entities/notification/notification';
import { Notification as RawNotification } from '@prisma/client';

export class PrismaNotificationMapper {
  static toPrisma(notification: Notification) {
    return {
      id: notification.id,
      category: notification.category,
      content: notification.content.value,
      recipientId: notification.recipientId,
      readAt: notification.readAt,
      createdAt: notification.createdAt,
      canceledAt: notification.canceledAt,
    };
  }

  static toDomain(raw: RawNotification): Notification {
    return new Notification({
      category: raw.category,
      content: new Content(raw.content),
      createdAt: raw.createdAt,
      id: raw.id,
      recipientId: raw.recipientId,
      canceledAt: raw.canceledAt,
      readAt: raw.readAt,
    });
  }
}
