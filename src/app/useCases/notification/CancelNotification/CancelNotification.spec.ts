import { NotificationsRepositoryInMemory } from '../../../../../test/repositories/NotificationsRepositoryInMemory';
import { NotificationNotFound } from '../../errors/NotificationNotFound';
import { SendNotificationUseCase } from '../SendNotification/SendNotificationUseCase';
import { CancelNotificationUseCase } from './CancelNotificationUseCase';

describe('Cancel notification', () => {
  const notificationsRepositoryInMemory = new NotificationsRepositoryInMemory();
  it('should be able to cancel a notification', async () => {
    const sendNotificationUseCase = new SendNotificationUseCase(
      notificationsRepositoryInMemory,
    );
    const cancelNotificationUseCase = new CancelNotificationUseCase(
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

    await cancelNotificationUseCase.execute({
      notificationId: notification.id,
    });

    expect(notification).toHaveProperty('canceledAt');
    expect(notificationsRepositoryInMemory.notifications[0].canceledAt).toEqual(
      expect.any(Date),
    );
  });

  it('should not be able to cancel a non existing notification', async () => {
    const cancelNotificationUseCase = new CancelNotificationUseCase(
      notificationsRepositoryInMemory,
    );

    expect(async () => {
      return await cancelNotificationUseCase.execute({
        notificationId: '123456',
      });
    }).rejects.toThrow(NotificationNotFound);
  });
});
