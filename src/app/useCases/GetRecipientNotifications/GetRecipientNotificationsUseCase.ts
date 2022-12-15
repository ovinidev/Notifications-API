import { Notification } from '../../entities/notification/notification';
import { NotificationsRepository } from '../../repositories/NotificationsRepository';
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

    return await this.notificationsRepository.findManyByRecipientId(
      recipientId,
    );
  }
}
