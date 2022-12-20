import { Controller, Get } from '@nestjs/common';
import { FindAllNotificationsUseCase } from '@app/useCases/notification/FindAllNotifications/FindAllNotificationsUseCase';
import {
  NotificationViewModel,
  NotificationViewModelProps,
} from '../../viewModels/NotificationViewModels';

@Controller('notifications')
export class FindAllNotificationsController {
  constructor(
    private findAllNotificationsUseCase: FindAllNotificationsUseCase,
  ) {}

  @Get()
  async get(): Promise<NotificationViewModelProps[]> {
    const notifications = await this.findAllNotificationsUseCase.execute();

    return notifications.map(NotificationViewModel.toHTTP);
  }
}