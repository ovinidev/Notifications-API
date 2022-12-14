import { Injectable } from '@nestjs/common';
import { Notification } from '../../entities/notification/notification';
import { NotificationsRepository } from '../../repositories/NotificationsRepository';

@Injectable()
export class FindAllNotificationsUseCase {
  constructor(private notificationsRepository: NotificationsRepository) {}

  async execute(): Promise<Notification[]> {
    const notifications = this.notificationsRepository.findAll();

    return notifications;
  }
}
