import { IsEmail, IsNotEmpty, Length } from 'class-validator';

export class LoginUserBody {
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @Length(6, 10)
  password: string;
}
