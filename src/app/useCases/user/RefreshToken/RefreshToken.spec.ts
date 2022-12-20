import { UserRepositoryInMemory } from '../../../../../test/repositories/UserRepositoryInMemory';
import { CreateUserUseCase } from '../CreateUser/CreateUserUseCase';
import { LoginUseCase } from '../Login/LoginUseCase';
import { RefreshTokenUseCase } from './RefreshTokenUseCase';

describe('Refresh Token', () => {
  const userRepositoryInMemory = new UserRepositoryInMemory();

  it('should be able to take a new token with refresh token', async () => {
    const loginUseCase = new LoginUseCase(userRepositoryInMemory);
    const refreshTokenUseCase = new RefreshTokenUseCase();
    const createUserUseCase = new CreateUserUseCase(userRepositoryInMemory);

    const user = {
      name: 'Vinicius',
      email: 'vini@test.com',
      password: '123456',
    };

    await createUserUseCase.execute(user);

    const login = await loginUseCase.execute({
      email: user.email,
      password: user.password,
    });

    const refreshToken = await refreshTokenUseCase.execute(
      `Bearer ${login.refreshToken}`,
    );

    expect(refreshToken).toBeTruthy();
  });

  it('should not be able to take a new token with refresh token invalid', async () => {
    const refreshTokenUseCase = new RefreshTokenUseCase();
    const createUserUseCase = new CreateUserUseCase(userRepositoryInMemory);

    const user = {
      name: 'Vinicius',
      email: 'vini@test2.com',
      password: '123456',
    };

    await createUserUseCase.execute(user);

    expect(async () => {
      await refreshTokenUseCase.execute(`Bearer REFRESHINVALID`);
    }).rejects.toThrow(Error);
  });
});
