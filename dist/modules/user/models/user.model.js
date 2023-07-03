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
exports.UserSchema = exports.User = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const uuid_1 = require("uuid");
const phoneNumber_schema_1 = require("./phoneNumber.schema");
const mongoose_2 = require("mongoose");
let User = class User extends mongoose_2.Document {
};
__decorate([
    (0, mongoose_1.Prop)({ default: function getUUID() {
            return (0, uuid_1.v4)();
        } }),
    __metadata("design:type", String)
], User.prototype, "_id", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: phoneNumber_schema_1.PhoneNumberSchema }),
    __metadata("design:type", phoneNumber_schema_1.PhoneNumberSchema)
], User.prototype, "phoneNumber", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, ref: 'UserProfile' }),
    __metadata("design:type", String)
], User.prototype, "userProfile", void 0);
User = __decorate([
    (0, mongoose_1.Schema)()
], User);
exports.User = User;
exports.UserSchema = mongoose_1.SchemaFactory.createForClass(User);
//# sourceMappingURL=user.model.js.map