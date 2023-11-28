import { NewUserService } from '../services/new-user.service';
import { NewUserDTO } from './dto/new-user.dto';
export declare class NewUserController {
    private readonly newUserService;
    constructor(newUserService: NewUserService);
    create(newUserDTO: NewUserDTO): Promise<NewUserDTO>;
}
