import { GenderEnum } from "../enum/user.enum"

export class CreateUserDto {
    name : {
        firstName:string
        middleName?:string
        lastName:string
    }
     
    email:string
    
    password : string
    
}

export class createUserProfileDto{

    phoneNumber : {
        countryCode?: string
        number:string
    }

    country:string

    city:string

    gender: GenderEnum
    
    DateOfBirth:Date

    address : string
     
     
}

