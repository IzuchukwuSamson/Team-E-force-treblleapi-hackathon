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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const user_model_1 = require("../models/user.model");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const bcrypt_1 = require("bcrypt");
const userProfle_model_1 = require("../models/userProfle.model");
let UserService = class UserService {
    constructor(userModel, userProfileModel) {
        this.userModel = userModel;
        this.userProfileModel = userProfileModel;
    }
    async createUser(createUserDto) {
        const { password, phoneNumber } = createUserDto;
        const userHashedPassword = this.hashPassword(password);
        const user = new this.userModel({
            phoneNumber: phoneNumber,
            password: userHashedPassword
        });
        return await user.save();
    }
    async createUserProfile(createUserProfile, userId) {
        const { _id: userProfileId } = await this.userProfileModel.create(createUserProfile);
        const user = await this.userModel.findOneAndUpdate({ _id: userId }, { userProfile: userProfileId }, { new: true });
        if (!user)
            throw new common_1.NotFoundException("user not found");
        return await user.populate('userProfile');
    }
    findAll() {
        return `This action returns all user`;
    }
    findOne(id) {
        return `This action returns a #${id} user`;
    }
    update(id, updateUserDto) {
        return `This action updates a #${id} user`;
    }
    remove(id) {
        return `This action removes a #${id} user`;
    }
    async hashPassword(password) {
        const saltRounds = 10;
        const salt = await bcrypt_1.default.genSalt(saltRounds);
        const hash = await bcrypt_1.default.hash(password, salt);
        return hash;
    }
    async comparePassword(myPlaintextPassword, hash) {
        console.log(await bcrypt_1.default.compare(myPlaintextPassword, hash));
        return await bcrypt_1.default.compare(myPlaintextPassword, hash);
    }
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(user_model_1.User.name)),
    __param(1, (0, mongoose_1.InjectModel)(userProfle_model_1.UserProfile.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map