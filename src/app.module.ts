import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { DataBaseModule } from '@infra/database/database.module';
import { HttpModule } from '@infra/http/http.module';
import { AuthenticateUser } from '@infra/http/middlewares/AuthenticateUser';

@Module({
  imports: [HttpModule, DataBaseModule],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthenticateUser).forRoutes('notifications');
  }
}
