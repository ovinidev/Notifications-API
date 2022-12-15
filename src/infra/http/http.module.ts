import { Module } from '@nestjs/common';
import { FindAllNotificationsUseCase } from 'src/app/useCases/FindAllNotifications/FindAllNotificationsUseCase';
import { SendNotificationUseCase } from '@app/useCases/SendNotification/SendNotificationUseCase';
import { DataBaseModule } from '../database/database.module';
import { FindAllNotificationsController } from './controllers/FindAllNotifications.controller';
import { SendNotificationController } from './controllers/SendNotification.controller';
import { CancelNotificationController } from './controllers/CancelNotification.controller';
import { CancelNotificationUseCase } from '@app/useCases/CancelNotification/CancelNotificationUseCase';
import { CountRecipientNotificationsController } from './controllers/CountRecipientNotification.controller';
import { CountRecipientNotificationsUseCase } from '@app/useCases/CountNotifications/CountRecipientNotificationsUseCase';
import { GetRecipientNotificationsController } from './controllers/GetRecipientNotifications.controller';
import { GetRecipientNotificationsUseCase } from '@app/useCases/GetRecipientNotifications/GetRecipientNotificationsUseCase';

@Module({
  imports: [DataBaseModule],
  controllers: [
    SendNotificationController,
    FindAllNotificationsController,
    CancelNotificationController,
    CountRecipientNotificationsController,
    GetRecipientNotificationsController,
  ],
  providers: [
    SendNotificationUseCase,
    FindAllNotificationsUseCase,
    CancelNotificationUseCase,
    CountRecipientNotificationsUseCase,
    GetRecipientNotificationsUseCase,
  ],
})
export class HttpModule {}
