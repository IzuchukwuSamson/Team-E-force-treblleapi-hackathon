import { Module } from '@nestjs/common';
import { UserService } from './services/user.service';
import { UserController } from './controllers/user.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './models/user.model';
import { UserProfile, UserProfileSchema } from './models/userProfle.model';

//@global()
@Module({
  imports:[
    MongooseModule.forFeatureAsync([
      {
        name: User.name,
        useFactory: () => {
          return UserSchema;
        }
      }
  ]),
  MongooseModule.forFeatureAsync([
    {
      name: UserProfile.name,
      useFactory: () => {
        return UserProfileSchema;
      }
    }
])
],

  controllers: [UserController],
  providers: [UserService]
})
export class UserModule {}
