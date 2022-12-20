import { Controller, Get, Param } from '@nestjs/common';
import {
  CountRecipientNotificationsUseCase,
  CountRecipientNotificationsUseCaseResponse,
} from '@app/useCases/notification/CountNotifications/CountRecipientNotificationsUseCase';

@Controller('notifications')
export class CountRecipientNotificationsController {
  constructor(
    private countRecipientNotificationUseCase: CountRecipientNotificationsUseCase,
  ) {}

  @Get('count/:id')
  async get(
    @Param('id') id: string,
  ): Promise<CountRecipientNotificationsUseCaseResponse> {
    return this.countRecipientNotificationUseCase.execute({
      recipientId: id,
    });
  }
}
