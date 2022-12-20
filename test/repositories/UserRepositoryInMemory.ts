import { User } from '@app/entities/user/user';
import { UserRepository } from '@app/repositories/UserRepository';
import { randomUUID } from 'crypto';

export class UserRepositoryInMemory implements UserRepository {
  public users: User[] = [];

  async create(user: User): Promise<void> {
    const userToCreate = {
      id: randomUUID(),
      name: user.name,
      email: user.email,
      password: user.password,
    } as User;

    this.users.push(userToCreate);
  }

  async findByEmail(email: string): Promise<User | null> {
    const user = this.users.find((user) => {
      return user.email === email;
    });

    if (!user) return null;

    return user;
  }

  async findById(id: string): Promise<User | null> {
    const user = this.users.find((user) => {
      return user.id === id;
    });

    if (!user) return null;

    return user;
  }
}
