import { Injectable } from '@nestjs/common';
import { NotificationsRepository } from '../../repositories/NotificationsRepository';
import { Content } from '../../entities/notification/content';
import { Notification } from '../../entities/notification/notification';
import { randomUUID } from 'crypto';

interface SendNotificationRequest {
  recipientId: string;
  content: string;
  category: string;
}

interface SendNotificationResponse {
  notification: Notification;
}

@Injectable()
export class SendNotificationUseCase {
  constructor(private notificationsRepository: NotificationsRepository) {}

  async execute(
    request: SendNotificationRequest,
  ): Promise<SendNotificationResponse> {
    const { category, content, recipientId } = request;

    const notification = new Notification({
      id: randomUUID(),
      category,
      content: new Content(content),
      recipientId,
    });

    await this.notificationsRepository.create(notification);

    return { notification };
  }
}
