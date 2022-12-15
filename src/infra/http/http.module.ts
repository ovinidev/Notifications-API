import { Module } from '@nestjs/common';
import { FindAllNotificationsUseCase } from 'src/app/useCases/FindAllNotifications/FindAllNotificationsUseCase';
import { SendNotificationUseCase } from '@app/useCases/SendNotification/SendNotificationUseCase';
import { DataBaseModule } from '../database/database.module';
import { FindAllNotificationsController } from './controllers/findAllNotifications.controller';
import { SendNotificationController } from './controllers/sendNotification.controller';
import { CancelNotificationController } from './controllers/cancelNotification.controller';
import { CancelNotificationUseCase } from '@app/useCases/CancelNotification/CancelNotificationUseCase';
import { CountRecipientNotificationsController } from './controllers/countRecipientNotification.controller';
import { CountRecipientNotificationsUseCase } from '@app/useCases/CountNotifications/CountRecipientNotificationsUseCase';

@Module({
  imports: [DataBaseModule],
  controllers: [
    SendNotificationController,
    FindAllNotificationsController,
    CancelNotificationController,
    CountRecipientNotificationsController,
  ],
  providers: [
    SendNotificationUseCase,
    FindAllNotificationsUseCase,
    CancelNotificationUseCase,
    CountRecipientNotificationsUseCase,
  ],
})
export class HttpModule {}
