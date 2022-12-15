import { NotificationsRepository } from '@app/repositories/NotificationsRepository';
import { Notification } from '@app/entities/notification/notification';

export class NotificationsRepositoryInMemory
  implements NotificationsRepository
{
  public notifications: Notification[] = [];

  async create(notification: Notification) {
    this.notifications.push(notification);
  }

  async findAll(): Promise<Notification[]> {
    return this.notifications;
  }

  async findById(notificationId: string): Promise<Notification | null> {
    const notification = this.notifications.find(
      (notification) => notification.id === notificationId,
    );

    if (!notification) return null;

    return notification;
  }

  async update(notificationToUpdate: Notification): Promise<void> {
    this.notifications.filter((notification) => {
      return notification.id !== notificationToUpdate.id;
    });

    this.notifications.push(notificationToUpdate);
  }
}
