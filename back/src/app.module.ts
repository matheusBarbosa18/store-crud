import { Module } from '@nestjs/common';
import { UserModule } from './User/user.module';
import { DatabaseModule } from './User/database/database.module';

@Module({
  imports: [UserModule,DatabaseModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
