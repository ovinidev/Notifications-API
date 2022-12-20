import { NotificationsRepositoryInMemory } from '../../../../../test/repositories/NotificationsRepositoryInMemory';
import { SendNotificationUseCase } from '../SendNotification/SendNotificationUseCase';
import { CountRecipientNotificationsUseCase } from './CountRecipientNotificationsUseCase';

describe('Count recipient notifications', () => {
  const notificationsRepositoryInMemory = new NotificationsRepositoryInMemory();
  it('should be able to get a count of a notification', async () => {
    const sendNotificationUseCase = new SendNotificationUseCase(
      notificationsRepositoryInMemory,
    );
    const countRecipientNotificationsUseCase =
      new CountRecipientNotificationsUseCase(notificationsRepositoryInMemory);

    const notificationToSend = {
      content: 'Teste de descrição',
      category: 'test',
      recipientId: '123',
    };

    await sendNotificationUseCase.execute(notificationToSend);

    const { count } = await countRecipientNotificationsUseCase.execute({
      recipientId: notificationToSend.recipientId,
    });

    expect(count).toEqual(1);
  });
});
