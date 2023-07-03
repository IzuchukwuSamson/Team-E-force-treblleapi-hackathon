import { CanActivate, ExecutionContext, UnauthorizedException } from "@nestjs/common";
import { Observable } from "rxjs";
import { Response } from "express";

export class createUserProfileGuard implements CanActivate {

    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
       
        const response:Response = context.switchToHttp().getRequest();

        const token = response.locals.user;

        if(!token) throw new UnauthorizedException("Login to to create profile");

        return true;
    }

    
}