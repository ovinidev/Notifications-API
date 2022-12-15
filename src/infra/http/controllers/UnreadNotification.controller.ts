import { Controller, Param, Put } from '@nestjs/common';
import { UnreadNotificationUseCase } from '@app/useCases/UnreadNotification/UnreadNotificationUseCase';

@Controller('notifications')
export class UnreadNotificationController {
  constructor(private unreadNotificationUseCase: UnreadNotificationUseCase) {}

  @Put('unread/:id')
  async update(@Param('id') id: string): Promise<void> {
    await this.unreadNotificationUseCase.execute({ notificationId: id });
  }
}
