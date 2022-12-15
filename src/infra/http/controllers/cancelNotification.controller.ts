import { Controller, Param, Put } from '@nestjs/common';
import { CancelNotificationUseCase } from '@app/useCases/CancelNotification/CancelNotificationUseCase';

@Controller('notifications')
export class CancelNotificationController {
  constructor(private cancelNotificationUseCase: CancelNotificationUseCase) {}

  @Put(':id')
  async update(@Param('id') id: string): Promise<void> {
    await this.cancelNotificationUseCase.execute({ notificationId: id });
  }
}
