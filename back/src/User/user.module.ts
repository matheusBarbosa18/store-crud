import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RegisterUserController } from './controller/register-user/register-user.controller';
import { RegisterUserService } from './services/register-user/register-user.service';
import { UserEntity } from './entity/user.entity';
import { LoginUserController } from './controller/login-user/login-user.controller';
import { LoginUserService } from './services/login-user/login-user.service';

@Module({
    imports: [TypeOrmModule.forFeature([UserEntity])],
    controllers: [RegisterUserController,LoginUserController],
    providers: [RegisterUserService,LoginUserService],
    exports: [RegisterUserService,LoginUserService],
})
export class UserModule { }
