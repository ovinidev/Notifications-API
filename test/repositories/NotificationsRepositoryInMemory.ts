import { NotificationsRepository } from 'src/app/repositories/NotificationsRepository';
import { Notification } from '../../src/app/entities/notification/notification';

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
}
