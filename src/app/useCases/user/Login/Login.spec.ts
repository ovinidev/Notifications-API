import { UserRepositoryInMemory } from '../../../../../test/repositories/UserRepositoryInMemory';
import { CreateUserUseCase } from '../CreateUser/CreateUserUseCase';
import { LoginUseCase } from './LoginUseCase';

describe('Login', () => {
  const userRepositoryInMemory = new UserRepositoryInMemory();

  it('should be able to login', async () => {
    const loginUseCase = new LoginUseCase(userRepositoryInMemory);
    const createUserUseCase = new CreateUserUseCase(userRepositoryInMemory);

    const user = {
      name: 'Vinicius',
      email: 'vini@test.com',
      password: '123456',
    };

    await createUserUseCase.execute(user);

    const response = await loginUseCase.execute({
      email: user.email,
      password: user.password,
    });

    expect(response).toBeTruthy();
  });
});
