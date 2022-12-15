import { NotificationsRepository } from '../../repositories/NotificationsRepository';
import { Injectable } from '@nestjs/common';

interface CountRecipientNotificationsUseCaseRequest {
  recipientId: string;
}

export interface CountRecipientNotificationsUseCaseResponse {
  count: number;
}

@Injectable()
export class CountRecipientNotificationsUseCase {
  constructor(private notificationRepository: NotificationsRepository) {}

  async execute(
    req: CountRecipientNotificationsUseCaseRequest,
  ): Promise<CountRecipientNotificationsUseCaseResponse> {
    const { recipientId } = req;

    const countNotification =
      await this.notificationRepository.countManyByRecipientId(recipientId);

    return {
      count: countNotification,
    };
  }
}
