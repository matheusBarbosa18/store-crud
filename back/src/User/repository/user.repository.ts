import { UserEntity } from "../entity/user.entity";

export class UserRepository {
  private users: UserEntity[] = [];

  async findAll(): Promise<UserEntity[]> {
    return this.users;
  }

  async save(user: UserEntity): Promise<UserEntity> {
    this.users.push(user);
    return user;
  }
}
