import { Module } from '@nestjs/common';
import { FindAllNotificationsUseCase } from 'src/app/useCases/notification/FindAllNotifications/FindAllNotificationsUseCase';
import { SendNotificationUseCase } from '@app/useCases/notification/SendNotification/SendNotificationUseCase';
import { DataBaseModule } from '../database/database.module';
import { FindAllNotificationsController } from './controllers/notification/FindAllNotifications.controller';
import { SendNotificationController } from './controllers/notification/SendNotification.controller';
import { CancelNotificationController } from './controllers/notification/CancelNotification.controller';
import { CancelNotificationUseCase } from '@app/useCases/notification/CancelNotification/CancelNotificationUseCase';
import { CountRecipientNotificationsController } from './controllers/notification/CountRecipientNotification.controller';
import { CountRecipientNotificationsUseCase } from '@app/useCases/notification/CountNotifications/CountRecipientNotificationsUseCase';
import { GetRecipientNotificationsController } from './controllers/notification/GetRecipientNotifications.controller';
import { GetRecipientNotificationsUseCase } from '@app/useCases/notification/GetRecipientNotifications/GetRecipientNotificationsUseCase';
import { ReadNotificationController } from './controllers/notification/ReadNotification.controller';
import { UnreadNotificationController } from './controllers/notification/UnreadNotification.controller';
import { ReadNotificationUseCase } from '@app/useCases/notification/ReadNotification/ReadNotificationUseCase';
import { UnreadNotificationUseCase } from '@app/useCases/notification/UnreadNotification/UnreadNotificationUseCase';
import { CreateUserController } from './controllers/user/CreateUser.controller';
import { CreateUserUseCase } from '@app/useCases/user/CreateUser/CreateUserUseCase';
import { LoginController } from './controllers/user/Login.controller';
import { LoginUseCase } from '@app/useCases/user/Login/LoginUseCase';
import { RefreshTokenController } from './controllers/user/RefreshToken.controller';
import { RefreshTokenUseCase } from '@app/useCases/user/RefreshToken/RefreshTokenUseCase';

@Module({
  imports: [DataBaseModule],
  controllers: [
    SendNotificationController,
    FindAllNotificationsController,
    CancelNotificationController,
    CountRecipientNotificationsController,
    GetRecipientNotificationsController,
    ReadNotificationController,
    UnreadNotificationController,
    CreateUserController,
    LoginController,
    RefreshTokenController,
  ],
  providers: [
    SendNotificationUseCase,
    FindAllNotificationsUseCase,
    CancelNotificationUseCase,
    CountRecipientNotificationsUseCase,
    GetRecipientNotificationsUseCase,
    ReadNotificationUseCase,
    UnreadNotificationUseCase,
    CreateUserUseCase,
    LoginUseCase,
    RefreshTokenUseCase,
  ],
})
export class HttpModule {}
