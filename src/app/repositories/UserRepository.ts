import { User, UserProps } from '@app/entities/user/user';

export abstract class UserRepository {
  abstract create(user: UserProps): Promise<void>;
  abstract findByEmail(email: string): Promise<User | null>;
}
