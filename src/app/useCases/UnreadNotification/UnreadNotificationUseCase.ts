import { Injectable } from '@nestjs/common';
import { NotificationsRepository } from '../../repositories/NotificationsRepository';
import { NotificationNotFound } from '../errors/NotificationNotFound';

interface UnreadNotificationUseCaseProps {
  notificationId: string;
}

@Injectable()
export class UnreadNotificationUseCase {
  constructor(private notificationsRepository: NotificationsRepository) {}

  async execute(request: UnreadNotificationUseCaseProps): Promise<void> {
    const { notificationId } = request;

    const notification = await this.notificationsRepository.findById(
      notificationId,
    );

    if (!notification) {
      throw new NotificationNotFound();
    }

    notification.unread();

    await this.notificationsRepository.update(notification);
  }
}
