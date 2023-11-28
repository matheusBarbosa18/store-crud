import { Repository } from 'typeorm';
import { NewUserDTO } from '../controller/dto/new-user.dto';
import { UserEntity } from '../entity/user.entity';
export declare class NewUserService {
    private readonly produtoRepository;
    constructor(produtoRepository: Repository<UserEntity>);
    execute(newUserDTO: NewUserDTO): Promise<UserEntity>;
}
