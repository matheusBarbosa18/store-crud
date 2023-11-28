import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import {  RegisterUserService } from '../../services/register-user/register-user.service';
import { UserDTO } from './dto/user.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('User')
@Controller('User')
export class RegisterUserController {
  constructor(private readonly registerUserService: RegisterUserService) {}

  @Post('/register')
  @ApiResponse({ status: 201, description: 'cadastra um novo usuario', type: UserDTO })
  async create(@Body() userDTO: UserDTO) {
     await this.registerUserService.execute(userDTO);
  }
}
