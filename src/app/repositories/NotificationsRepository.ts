import { Notification } from '../entities/notification/notification';

export abstract class NotificationsRepository {
  abstract create(notification: Notification): Promise<void>;
  abstract findAll(): Promise<Notification[]>;
  abstract findById(notificationId: string): Promise<Notification | null>;
  abstract findByRecipientId(recipientId: string): Promise<Notification[]>;
  abstract update(notification: Notification): Promise<void>;
  abstract countManyByRecipientId(recipientId: string): Promise<number>;
}
