import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { EmailSchema } from "./email.schema";
import { GenderEnum } from "../enum/user.enum";
import   {v4 as uuidv4} from 'uuid'
import { Document } from 'mongoose';
import { PhoneNumberSchema } from "./phoneNumber.schema";

@Schema()
export class UserProfile extends Document {

  @Prop({ default: function getUUID(){
        return uuidv4()
      } })
    _id: string;

  @Prop({type:PhoneNumberSchema})  
  phoneNumber: PhoneNumberSchema;
  
  @Prop()
  address: string;
  
  @Prop()
  city: string;
  
  @Prop({default:"Nigeria"})
  country: string;
  
  @Prop({type:Date})
  DateOfBirth:Date
  
  @Prop({type:String, ref:'User'})
  user: string;
}

export const UserProfileSchema = SchemaFactory.createForClass(UserProfile);
