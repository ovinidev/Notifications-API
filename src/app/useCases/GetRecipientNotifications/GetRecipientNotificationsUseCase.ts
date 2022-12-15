import { Notification } from '@app/entities/notification/notification';
import { NotificationsRepository } from '@app/repositories/NotificationsRepository';
import { Injectable } from '@nestjs/common';

interface GetRecipientNotificationsRequest {
  recipientId: string;
}

@Injectable()
export class GetRecipientNotificationsUseCase {
  constructor(private notificationsRepository: NotificationsRepository) {}

  async execute(
    req: GetRecipientNotificationsRequest,
  ): Promise<Notification[]> {
    const { recipientId } = req;

    return await this.notificationsRepository.findByRecipientId(recipientId);
  }
}
