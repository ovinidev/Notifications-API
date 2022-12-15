import { Body, Controller, Post } from '@nestjs/common';
import { SendNotificationUseCase } from '@app/useCases/SendNotification/SendNotificationUseCase';

import { CreateNotificationBody } from '../dtos/createNotificationBody';
import { NotificationViewModel } from '../viewModels/NotificationViewModels';

@Controller('notifications')
export class SendNotificationController {
  constructor(private sendNotificationUseCase: SendNotificationUseCase) {}

  @Post()
  async create(@Body() body: CreateNotificationBody) {
    const { recipientId, content, category } = body;

    const { notification } = await this.sendNotificationUseCase.execute({
      recipientId,
      content,
      category,
    });

    const notificationToHTTP = NotificationViewModel.toHTTP(notification);

    return notificationToHTTP;
  }
}
