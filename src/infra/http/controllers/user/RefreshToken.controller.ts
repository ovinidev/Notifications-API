import { RefreshTokenUseCase } from '@app/useCases/user/RefreshToken/RefreshTokenUseCase';
import { Controller, Headers, Post } from '@nestjs/common';

@Controller('refreshToken')
export class RefreshTokenController {
  constructor(private refreshToken: RefreshTokenUseCase) {}

  @Post()
  async handle(@Headers() headers) {
    const { authorization } = headers;

    const response = await this.refreshToken.execute(authorization);

    return response;
  }
}
