import { Notification } from '@app/entities/notification/notification';

export interface NotificationViewModelProps {
  notification: {
    id: string;
    content: string;
    category: string;
    recipientId: string;
    readAt?: Date | null;
    canceledAt?: Date | null;
  };
}
export class NotificationViewModel {
  static toHTTP(notification: Notification): NotificationViewModelProps {
    return {
      notification: {
        id: notification.id,
        content: notification.content.value,
        category: notification.category,
        recipientId: notification.recipientId,
        readAt: notification.readAt,
        canceledAt: notification.canceledAt,
      },
    };
  }
}
