import { NotificationsRepositoryInMemory } from '../../../../../test/repositories/NotificationsRepositoryInMemory';
import { SendNotificationUseCase } from '../SendNotification/SendNotificationUseCase';
import { FindAllNotificationsUseCase } from './FindAllNotificationsUseCase';

describe('Find all notifications', () => {
  const notificationsRepositoryInMemory = new NotificationsRepositoryInMemory();
  it('should be able to find a notifications', async () => {
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
