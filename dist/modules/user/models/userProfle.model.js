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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserProfileSchema = exports.UserProfile = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const email_schema_1 = require("./email.schema");
const user_enum_1 = require("../enum/user.enum");
const uuid_1 = require("uuid");
const mongoose_2 = require("mongoose");
let UserProfile = class UserProfile extends mongoose_2.Document {
};
__decorate([
    (0, mongoose_1.Prop)({ type: String, default: function genUUID() {
            return (0, uuid_1.v4)();
        } }),
    __metadata("design:type", String)
], UserProfile.prototype, "_id", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], UserProfile.prototype, "firstName", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], UserProfile.prototype, "middleName", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], UserProfile.prototype, "lastName", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", email_schema_1.EmailSchema)
], UserProfile.prototype, "email", void 0);
__decorate([
    (0, mongoose_1.Prop)({ enum: Object.values(user_enum_1.GenderEnum) }),
    __metadata("design:type", String)
], UserProfile.prototype, "gender", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Date)
], UserProfile.prototype, "DateOfBirth", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], UserProfile.prototype, "address", void 0);
UserProfile = __decorate([
    (0, mongoose_1.Schema)()
], UserProfile);
exports.UserProfile = UserProfile;
exports.UserProfileSchema = mongoose_1.SchemaFactory.createForClass(UserProfile);
//# sourceMappingURL=userProfle.model.js.map