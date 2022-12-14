import { Content } from './content';
import { Notification, NotificationProps } from './notification';

describe('Notification', () => {
  it('should be able to create a notification', () => {
    const notificationToSend = {
      content: new Content('Teste de descrição'),
      category: 'test',
      recipientId: '123',
    } as NotificationProps;

    const notification = new Notification(notificationToSend);

    expect(notification).toBeTruthy();
  });
});
