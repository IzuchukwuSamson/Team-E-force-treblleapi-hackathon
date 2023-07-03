/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { CreateUserDto, createUserProfileDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { User } from '../models/user.model';
import { Model } from 'mongoose';
import { UserProfile } from '../models/userProfle.model';
export declare class UserService {
    private userModel;
    private userProfileModel;
    constructor(userModel: Model<User>, userProfileModel: Model<UserProfile>);
    createUser(createUserDto: CreateUserDto): Promise<import("mongoose").Document<unknown, {}, User> & Omit<User & Required<{
        _id: string;
    }>, never>>;
    createUserProfile(createUserProfile: createUserProfileDto, userId: string): Promise<Omit<import("mongoose").Document<unknown, {}, User> & Omit<User & Required<{
        _id: string;
    }>, never>, never>>;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateUserDto: UpdateUserDto): string;
    remove(id: number): string;
    hashPassword(password: string): Promise<string>;
    comparePassword(myPlaintextPassword: string, hash: string): Promise<boolean>;
}
