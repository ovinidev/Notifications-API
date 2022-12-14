import { NotificationsRepositoryInMemory } from '../../../../test/repositories/NotificationsRepositoryInMemory';
import { SendNotificationUseCase } from '../SendNotification/SendNotificationUseCase';
import { FindAllNotificationsUseCase } from './FindAllNotificationsUseCase';

describe('Send notification', () => {
  const notificationsRepositoryInMemory = new NotificationsRepositoryInMemory();
  it('should be able to send a notification', async () => {
    const sendNotificationUseCase = new SendNotificationUseCase(
      notificationsRepositoryInMemory,
    );
    const findAllNotificationsUseCase = new FindAllNotificationsUseCase(
      notificationsRepositoryInMemory,
    );

    const notificationToSend = {
      content: 'Teste de descrição',
      category: 'test',
      recipientId: '123',
    };

    await sendNotificationUseCase.execute(notificationToSend);

    const allNotifications = await findAllNotificationsUseCase.execute();

    expect(allNotifications).toBeTruthy();
  });
});
