import { Injectable } from '@nestjs/common';
import { NotificationsRepository } from '../../../repositories/NotificationsRepository';
import { NotificationNotFound } from '../../errors/NotificationNotFound';

interface CancelNotificationUseCaseProps {
  notificationId: string;
}

@Injectable()
export class CancelNotificationUseCase {
  constructor(private notificationsRepository: NotificationsRepository) {}

  async execute(request: CancelNotificationUseCaseProps): Promise<void> {
    const { notificationId } = request;

    const notification = await this.notificationsRepository.findById(
      notificationId,
    );

    if (!notification) {
      throw new NotificationNotFound();
    }

    notification.cancel();

    await this.notificationsRepository.update(notification);
  }
}
