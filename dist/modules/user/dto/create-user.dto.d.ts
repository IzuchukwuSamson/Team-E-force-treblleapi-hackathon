import { GenderEnum } from "../enum/user.enum";
export declare class CreateUserDto {
    phoneNumber: {
        countryCode?: string;
        number: string;
    };
    password: string;
}
export declare class createUserProfileDto {
    name: {
        firstName: string;
        middleName?: string;
        lastName: string;
    };
    email: {
        usermail: string;
        isVerified?: false;
    };
    gender: GenderEnum;
    DateOfBirth: Date;
    address: string;
}
