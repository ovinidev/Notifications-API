import { NotificationsRepositoryInMemory } from '../../../../../test/repositories/NotificationsRepositoryInMemory';
import { NotificationNotFound } from '../../errors/NotificationNotFound';
import { SendNotificationUseCase } from '../SendNotification/SendNotificationUseCase';
import { ReadNotificationUseCase } from './ReadNotificationUseCase';

describe('Read notification', () => {
  const notificationsRepositoryInMemory = new NotificationsRepositoryInMemory();
  it('should be able to read a notification', async () => {
    const sendNotificationUseCase = new SendNotificationUseCase(
      notificationsRepositoryInMemory,
    );
    const readNotificationUseCase = new ReadNotificationUseCase(
      notificationsRepositoryInMemory,
    );

    const notificationToSend = {
      content: 'Teste de descrição',
      category: 'test',
      recipientId: '123',
    };

    const { notification } = await sendNotificationUseCase.execute(
      notificationToSend,
    );

    await readNotificationUseCase.execute({
      notificationId: notification.id,
    });

    expect(notification).toHaveProperty('readAt');
    expect(notificationsRepositoryInMemory.notifications[0].readAt).toEqual(
      expect.any(Date),
    );
  });

  it('should not be able to read a non existing notification', async () => {
    const readNotificationUseCase = new ReadNotificationUseCase(
      notificationsRepositoryInMemory,
    );

    expect(async () => {
      return await readNotificationUseCase.execute({
        notificationId: '123456',
      });
    }).rejects.toThrow(NotificationNotFound);
  });
});
