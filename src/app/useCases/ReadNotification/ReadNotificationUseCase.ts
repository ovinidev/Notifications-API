import { Injectable } from '@nestjs/common';
import { NotificationsRepository } from '../../repositories/NotificationsRepository';
import { NotificationNotFound } from '../errors/NotificationNotFound';

interface ReadNotificationUseCaseProps {
  notificationId: string;
}

@Injectable()
export class ReadNotificationUseCase {
  constructor(private notificationsRepository: NotificationsRepository) {}

  async execute(request: ReadNotificationUseCaseProps): Promise<void> {
    const { notificationId } = request;

    const notification = await this.notificationsRepository.findById(
      notificationId,
    );

    if (!notification) {
      throw new NotificationNotFound();
    }

    notification.read();

    await this.notificationsRepository.update(notification);
  }
}
