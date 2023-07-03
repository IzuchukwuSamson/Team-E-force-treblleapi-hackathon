import { ConflictException, Injectable, NotFoundException, Req } from '@nestjs/common';
import { CreateUserDto, createUserProfileDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { User } from '../models/user.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import bcrypt from 'bcrypt'
import { UserProfile } from '../models/userProfle.model';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private userModel:Model<User>,
    @InjectModel(UserProfile.name) private userProfileModel:Model<UserProfile>
  ){  }
  
  async createUser(createUserDto: CreateUserDto) {
    const {password,name, email} = createUserDto;
    const emailExist = await this.userModel.findOne({email});

    if(emailExist) throw new ConflictException("Email already registered");

    //hash password
    const userHashedPassword = this.hashPassword(password);

    const user = new this.userModel({
      ...name,
      password:userHashedPassword,
      email
    });
    
    return await user.save();
  }
  

  // async createUserProfile(createUserProfile:createUserProfileDto, userId:string){
   
  //  //create user profile
  //  const {_id:userProfileId} = await this.userProfileModel.create(createUserProfile);

  //  //add profile Id to the user document
  //  const user = await this.userModel.findOneAndUpdate({_id:userId}, {userProfile:userProfileId},{new:true});
  //  if(!user) throw new NotFoundException("user not found");
  //  return await user.populate('userProfile');
  // }

  findAll() {
    return `This action returns all user`;
  }

  async findOne(userEmail:string) {
    const user = await this.userModel.findOne({email:userEmail});
    if(!user) throw new NotFoundException("user email not found");
    return user;
     
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }




  async hashPassword(password: string): Promise<string> {
    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);
    const hash = await bcrypt.hash(password, salt);
    return hash;
  }

  async comparePassword(myPlaintextPassword:string, hash:string): Promise<boolean> {
     console.log(await bcrypt.compare(myPlaintextPassword,hash))
     return await bcrypt.compare(myPlaintextPassword,hash)
  }

}
