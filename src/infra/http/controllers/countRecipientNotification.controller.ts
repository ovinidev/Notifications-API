import { Controller, Get, Param } from '@nestjs/common';
import {
  CountRecipientNotificationsUseCase,
  CountRecipientNotificationsUseCaseResponse,
} from '@app/useCases/CountNotifications/CountRecipientNotificationsUseCase';

@Controller('notifications')
export class CountRecipientNotificationsController {
  constructor(
    private countRecipientNotificationUseCase: CountRecipientNotificationsUseCase,
  ) {}

  @Get(':id')
  async get(
    @Param('id') id: string,
  ): Promise<CountRecipientNotificationsUseCaseResponse> {
    const notificationCount = this.countRecipientNotificationUseCase.execute({
      recipientId: id,
    });

    return notificationCount;
  }
}
