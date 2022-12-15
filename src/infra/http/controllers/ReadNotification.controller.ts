import { Controller, Param, Put } from '@nestjs/common';
import { ReadNotificationUseCase } from '@app/useCases/ReadNotification/ReadNotificationUseCase';

@Controller('notifications')
export class ReadNotificationController {
  constructor(private readNotificationUseCase: ReadNotificationUseCase) {}

  @Put('read/:id')
  async update(@Param('id') id: string): Promise<void> {
    await this.readNotificationUseCase.execute({ notificationId: id });
  }
}
