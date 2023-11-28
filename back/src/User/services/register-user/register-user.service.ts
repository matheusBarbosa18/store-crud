import { Injectable } from '@nestjs/common';
import { UserDTO } from '../../controller/register-user/dto/user.dto';
import { UserEntity } from '../../entity/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class RegisterUserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly produtoRepository: Repository<UserEntity>,
  ) {}

  async execute(userDTO: UserDTO) {
    const existingUser = await this.checkExistingEmail(userDTO.email);
    if (existingUser) {
      throw new Error('E-mail já registrado. Por favor, use um e-mail diferente.');
    }
    
    const loginUser = this.produtoRepository.create(userDTO);
     await this.produtoRepository.save(loginUser);
     return 'Usuário cadastrado com sucesso!';
  }

   async checkExistingEmail(email: string): Promise<UserEntity | undefined> {
    const existingUser = await this.produtoRepository.findOne({ where: { email } });
    return existingUser;
  }
}
