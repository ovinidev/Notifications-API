import { Controller, Get } from '@nestjs/common';
import { FindAllNotificationsUseCase } from '@app/useCases/FindAllNotifications/FindAllNotificationsUseCase';
import { Notification } from '@app/entities/notification/notification';

@Controller('notifications')
export class FindAllNotificationsController {
  constructor(
    private findAllNotificationsUseCase: FindAllNotificationsUseCase,
  ) {}

  @Get()
  async get(): Promise<Notification[]> {
    return await this.findAllNotificationsUseCase.execute();
  }
}
