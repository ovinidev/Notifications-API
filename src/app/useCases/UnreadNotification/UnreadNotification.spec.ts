import { NotificationsRepositoryInMemory } from '../../../../test/repositories/NotificationsRepositoryInMemory';
import { NotificationNotFound } from '../errors/NotificationNotFound';
import { ReadNotificationUseCase } from '../ReadNotification/ReadNotificationUseCase';
import { SendNotificationUseCase } from '../SendNotification/SendNotificationUseCase';
import { UnreadNotificationUseCase } from './UnreadNotificationUseCase';

describe('Unread notification', () => {
  const notificationsRepositoryInMemory = new NotificationsRepositoryInMemory();
  it('should be able to unread a notification', async () => {
    const sendNotificationUseCase = new SendNotificationUseCase(
      notificationsRepositoryInMemory,
    );
    const unreadNotificationUseCase = new UnreadNotificationUseCase(
      notificationsRepositoryInMemory,
    );

    const notificationToSend = {
      content: 'Teste de descrição',
      category: 'test',
      recipientId: '123',
      readAt: new Date(),
    };

    const { notification } = await sendNotificationUseCase.execute(
      notificationToSend,
    );

    console.log({ notification });

    await unreadNotificationUseCase.execute({
      notificationId: notification.id,
    });
    console.log({ notification });

    expect(notification.readAt).toBeNull();
  });

  it('should not be able to unread a non existing notification', async () => {
    const unreadNotificationUseCase = new UnreadNotificationUseCase(
      notificationsRepositoryInMemory,
    );

    expect(async () => {
      return await unreadNotificationUseCase.execute({
        notificationId: '123456',
      });
    }).rejects.toThrow(NotificationNotFound);
  });
});
