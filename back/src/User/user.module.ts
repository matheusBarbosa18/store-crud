import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RegisterUserController } from './controller/register-user/register-user.controller';
import { RegisterUserService } from './services/register-user/register-user.service';
import { UserEntity } from './entity/user.entity';

@Module({
    imports: [TypeOrmModule.forFeature([UserEntity])],
    controllers: [RegisterUserController],
    providers: [RegisterUserService],
    exports: [RegisterUserService],
})
export class UserModule { }
