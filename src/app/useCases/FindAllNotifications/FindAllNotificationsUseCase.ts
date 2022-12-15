import { Notification } from '@app/entities/notification/notification';
import { Injectable } from '@nestjs/common';
import { NotificationsRepository } from '../../repositories/NotificationsRepository';

@Injectable()
export class FindAllNotificationsUseCase {
  constructor(private notificationsRepository: NotificationsRepository) {}

  async execute(): Promise<Notification[]> {
    return await this.notificationsRepository.findAll();
  }
}
