import { UserEntity } from "../entity/user.entity";
export declare class UserRepository {
    private users;
    findAll(): Promise<UserEntity[]>;
    save(user: UserEntity): Promise<UserEntity>;
}
