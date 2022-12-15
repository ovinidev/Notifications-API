import { NotificationsRepositoryInMemory } from '../../../../test/repositories/NotificationsRepositoryInMemory';
import { SendNotificationUseCase } from '../SendNotification/SendNotificationUseCase';
import { GetRecipientNotificationsUseCase } from './GetRecipientNotificationsUseCase';

describe('Find all recipient notifications by recipient', () => {
  const notificationsRepositoryInMemory = new NotificationsRepositoryInMemory();
  it('should be able to get a count of a notification', async () => {
    const sendNotificationUseCase = new SendNotificationUseCase(
      notificationsRepositoryInMemory,
    );
    const getRecipientNotificationsUseCase =
      new GetRecipientNotificationsUseCase(notificationsRepositoryInMemory);

    const notificationToSend = {
      content: 'Teste de descrição',
      category: 'test',
      recipientId: '123',
    };

    await sendNotificationUseCase.execute(notificationToSend);

    const notifications = await getRecipientNotificationsUseCase.execute({
      recipientId: notificationToSend.recipientId,
    });

    expect(notifications).toHaveLength(1);
    expect(notifications).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          recipientId: notificationToSend.recipientId,
        }),
      ]),
    );
  });
});
