"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewUserController = void 0;
const common_1 = require("@nestjs/common");
const new_user_service_1 = require("../services/new-user.service");
const new_user_dto_1 = require("./dto/new-user.dto");
const swagger_1 = require("@nestjs/swagger");
let NewUserController = class NewUserController {
    constructor(newUserService) {
        this.newUserService = newUserService;
    }
    async create(newUserDTO) {
        return await this.newUserService.execute(newUserDTO);
    }
};
exports.NewUserController = NewUserController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'cadastra um novo usuario', type: new_user_dto_1.NewUserDTO }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [new_user_dto_1.NewUserDTO]),
    __metadata("design:returntype", Promise)
], NewUserController.prototype, "create", null);
exports.NewUserController = NewUserController = __decorate([
    (0, swagger_1.ApiTags)('newUser'),
    (0, common_1.Controller)('newUser'),
    __metadata("design:paramtypes", [new_user_service_1.NewUserService])
], NewUserController);
//# sourceMappingURL=new-user.controller.js.map