import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { EmailSchema } from "./email.schema";
import {v4 as uuidv4} from 'uuid'
import { PhoneNumberSchema } from "./phoneNumber.schema";
import { Document } from 'mongoose';

@Schema()
export class User extends Document{
     
   @Prop({ default: function getUUID(){
     return uuidv4()
   } })
   _id: string;
    
   @Prop()                 
   firstName:string
   
   @Prop()                 
   middleName:string;

   @Prop()
   lastName:string            
   
   @Prop()
   password : string
   
   @Prop({type:EmailSchema})
   email:EmailSchema
    
    // @Prop({type:String, ref:'UserProfile'})
    // userProfile:string

}

export const UserSchema = SchemaFactory.createForClass(User)
