"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
class UserRepository {
    constructor() {
        this.users = [];
    }
    async findAll() {
        return this.users;
    }
    async save(user) {
        this.users.push(user);
        return user;
    }
}
exports.UserRepository = UserRepository;
//# sourceMappingURL=user.repository.js.map