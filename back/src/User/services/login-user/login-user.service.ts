import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from 'src/User/entity/user.entity';

export interface LoginDTO {
    email: string;
    senha: string;
  }

@Injectable()
export class LoginUserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}
  async findByEmailAndSenha(input: LoginDTO): Promise<UserEntity | null> {
      const user = await this.userRepository.findOne({ where: input  });
      return user ;
}
}
