import { NotificationsRepositoryInMemory } from '../../../../test/repositories/NotificationsRepositoryInMemory';
import { SendNotificationUseCase } from '../SendNotification/SendNotificationUseCase';
import { CancelNotificationUseCase } from './CancelNotificationUseCase';

describe('Cancel notification', () => {
  const notificationsRepositoryInMemory = new NotificationsRepositoryInMemory();
  it('should be able to send a notification', async () => {
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
  });
});
