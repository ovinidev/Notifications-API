import { Controller, Get, Req } from '@nestjs/common';
import { FindAllNotificationsUseCase } from '@app/useCases/notification/FindAllNotifications/FindAllNotificationsUseCase';
import {
  NotificationViewModel,
  NotificationViewModelProps,
} from '../../viewModels/NotificationViewModels';
import { Request } from 'express';

@Controller('notifications')
export class FindAllNotificationsController {
  constructor(
    private findAllNotificationsUseCase: FindAllNotificationsUseCase,
  ) {}

  @Get()
  async get(@Req() req: Request): Promise<NotificationViewModelProps[]> {
    const notifications = await this.findAllNotificationsUseCase.execute();

    const { id } = req.user;

    return notifications.map(NotificationViewModel.toHTTP);
  }
}
