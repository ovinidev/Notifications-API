import { NotificationsRepositoryInMemory } from '../../../../test/repositories/NotificationsRepositoryInMemory';
import { SendNotificationUseCase } from './SendNotificationUseCase';

describe('Send notification', () => {
  const notificationsRepositoryInMemory = new NotificationsRepositoryInMemory();
  it('should be able to send a notification', async () => {
    const sendNotificationUseCase = new SendNotificationUseCase(
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

    expect(notificationsRepositoryInMemory.notifications).toHaveLength(1);
    expect(notificationsRepositoryInMemory.notifications[0]).toEqual(
      notification,
    );
  });
});
