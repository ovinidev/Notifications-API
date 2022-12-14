import { Module } from '@nestjs/common';
import { FindAllNotificationsUseCase } from 'src/app/useCases/FindAllNotifications/FindAllNotificationsUseCase';
import { SendNotificationUseCase } from 'src/app/useCases/SendNotification/SendNotificationUseCase';
import { DataBaseModule } from '../database/database.module';
import { FindAllNotificationsController } from './controllers/findAllNotifications.controller';
import { SendNotificationController } from './controllers/sendNotification.controller';

@Module({
  imports: [DataBaseModule],
  controllers: [SendNotificationController, FindAllNotificationsController],
  providers: [SendNotificationUseCase, FindAllNotificationsUseCase],
})
export class HttpModule {}
