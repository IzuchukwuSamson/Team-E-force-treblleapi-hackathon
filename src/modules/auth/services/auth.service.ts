import { Injectable, UnauthorizedException } from '@nestjs/common';
import {SignInDto } from '../dto/create-auth.dto';
import { UpdateAuthDto } from '../dto/update-auth.dto';
import { TokenService } from './token.service';
import { UserService } from 'src/modules/user/services/user.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly tokenService:TokenService,
    private readonly userService:UserService
    )
  { }

  async signIn(signInDto:SignInDto) {
    const {email, password}=signInDto;
    const user = await this.userService.findOne(email);

    //compare passsword
    const passwordIsValid = await this.userService.comparePassword(password,user.password);
    if(!passwordIsValid) throw new UnauthorizedException("Invalid email or password");
    
    // grant user with access token and refresh token
     return{
      accessToken :  this.tokenService.generateAuthToken({
        userId:user._id,
        firstName:user.firstName,
        lastName:user.lastName
      }),
      refreshToken :  this.tokenService.generateRefreshToken({
       email:user.email.userEmail,
        firstName:user.firstName,
        lastName:user.lastName
     })
     }

  }


}
