import { Controller, Post, Body, HttpStatus, HttpException, HttpCode } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { LoginUserService } from 'src/User/services/login-user/login-user.service';
import { LoginDTO } from './dto/login.dto';
import { error } from 'console';

@ApiTags('User')
@Controller('User')
export class LoginUserController {
  constructor(private readonly loginUserService: LoginUserService) {}

  @Post('/login')
  @ApiResponse({ status: 200, description: 'Faz login', type: LoginDTO })
  async checkLogin(@Body() loginDTO: LoginDTO) {
    try {
      const user = await this.loginUserService.findByEmailAndSenha(loginDTO);
      if (user) {
        return { status: HttpStatus.OK, message: 'Login bem-sucedido.' };
      } else {
          throw new HttpException('Credenciais inválidas.', HttpStatus.NOT_FOUND );
      }
    } catch (error) {
      throw new HttpException('Erro ao verificar o login.', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}