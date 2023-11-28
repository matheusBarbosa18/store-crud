import { Controller, Post, Body, HttpStatus, HttpException, HttpCode } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { LoginUserService } from 'src/User/services/login-user/login-user.service';
import { LoginDTO } from './dto/login.dto';

@ApiTags('User')
@Controller('User')
export class LoginUserController {
  constructor(private readonly loginUserService: LoginUserService) {}

  @Post('/login')
  @HttpCode(200)
  @ApiResponse({ status: 200, description: 'Faz login', type: LoginDTO })
  async checkLogin(@Body() loginDTO: LoginDTO) {
    try {
      const user = await this.loginUserService.findByEmailAndSenha(loginDTO);

      if (user) {
        return { status: HttpStatus.OK, message: 'Login bem-sucedido.' };
      } else {
        return{status: HttpStatus.NOT_FOUND ,message: 'Credenciais inválidas.'};
      }
    } catch (error) {
      throw new HttpException('Erro ao verificar o login.', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}