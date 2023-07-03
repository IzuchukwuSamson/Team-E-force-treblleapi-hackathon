import { Prop } from "@nestjs/mongoose";

export class PhoneNumberSchema {
   
    @Prop()
    number: string;

    @Prop({default:'+234'})
    countryCode:string;
  }