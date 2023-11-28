import { ApiProperty } from '@nestjs/swagger';

export class LoginDTO {
  @ApiProperty({
    description: 'O endereço de e-mail do usuário',
    example: 'usuario@email.com',
  })
  email: string;

  @ApiProperty({
    description: 'A senha do usuário',
    example: 'senha123',
  })
  senha: string;
}
