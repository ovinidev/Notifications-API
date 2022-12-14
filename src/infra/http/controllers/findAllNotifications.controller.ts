import { Controller, Get } from '@nestjs/common';
import { Notification } from 'src/app/entities/notification/notification';
import { FindAllNotificationsUseCase } from 'src/app/useCases/FindAllNotifications/FindAllNotificationsUseCase';

@Controller('notifications')
export class FindAllNotificationsController {
  constructor(
    private findAllNotificationsUseCase: FindAllNotificationsUseCase,
  ) {}

  @Get()
  async get(): Promise<Notification[]> {
    const notifications = await this.findAllNotificationsUseCase.execute();

    return notifications;
  }
}
