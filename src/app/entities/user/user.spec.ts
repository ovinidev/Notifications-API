import { User, UserProps } from './user';

describe('User', () => {
  it('should be able to create a user', () => {
    const userToCreate = {
      id: '123456789',
      name: 'Vinicius',
      email: 'vini@gmail.com',
      password: '123456',
    } as UserProps;

    const user = new User(userToCreate);

    expect(user).toBeTruthy();
  });
});
