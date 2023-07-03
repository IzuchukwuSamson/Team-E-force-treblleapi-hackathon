import { Prop } from "@nestjs/mongoose"


export class EmailSchema{
    @Prop()
    userEmail:string
    
    @Prop({type:Boolean, default:false})
    isVerified:boolean
}