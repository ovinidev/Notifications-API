import { GetRecipientNotificationsUseCase } from '@app/useCases/notification/GetRecipientNotifications/GetRecipientNotificationsUseCase';
import { Controller, Get, Param } from '@nestjs/common';

@Controller('notifications')
export class GetRecipientNotificationsController {
  constructor(
    private getRecipientNotificationUseCase: GetRecipientNotificationsUseCase,
  ) {}

  @Get(':id')
  async get(@Param('id') id: string) {
    return this.getRecipientNotificationUseCase.execute({ recipientId: id });
  }
}
