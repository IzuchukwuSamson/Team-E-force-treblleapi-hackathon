import { BadRequestException, Injectable, NestMiddleware, NotFoundException } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { TokenDto } from 'src/modules/auth/dto/token.dto';
import { TokenService } from 'src/modules/auth/services/token.service';


@Injectable()
export class TokenMiddleware implements NestMiddleware {

  constructor(private readonly tokenService: TokenService) {}

  async use(req: Request, res: Response, next: NextFunction) {

    if (!req.headers.authorization) return next();

    const authorizationHeader = req.headers.authorization;

    const [bearer, token] = authorizationHeader.split(' ');
    if (bearer !== 'Bearer') {
      throw new NotFoundException('please provide a Bearer token');
    }

    // if (!token) {
    //   throw new BadRequestException("")
    // }

    const tokenData = await this.tokenService.verifyToken(token);

    res.locals.tokenData = tokenData;

    next();
  }
}
