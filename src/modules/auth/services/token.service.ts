import { HttpException, Injectable, UnauthorizedException } from "@nestjs/common";
import { RefreshTokenDto, TokenDto } from "../dto/token.dto";
import { JwtService } from "@nestjs/jwt";
import { ConfigService } from "@nestjs/config";

@Injectable()
export class TokenService {
    constructor(
        private readonly configService: ConfigService,
        private readonly jwtService: JwtService) { }

    async generateAuthToken(tokenDto: TokenDto) {

        return {
            accessToken: await this.jwtService.signAsync(
                tokenDto,
                {
                    secret: this.configService.get("TOKEN_SECRET"),  //TODO: put this in an .env file
                    expiresIn: this.configService.get("JWT_LIFESPAN"),
                }
            )
        }
    }


    async generateRefreshToken(refreshTokenDto: RefreshTokenDto) {

        const refreshToken = await this.jwtService.signAsync(
            refreshTokenDto,
            {
                secret: this.configService.get("TOKEN_SECRET"),  //TODO: put this in an .env file
                expiresIn: this.configService.get("REFRESH_TOKEN_LIFESPAN"),
            }
        )
        return {
            refresh_token: refreshToken
        }
    }


    async verifyToken(token:string) {
        try {
            const decodedToken = await this.jwtService.verifyAsync(token, {secret:this.configService.get("TOKEN_SECRET")});
            return decodedToken;
        }
        catch (error) {
            if(error.name === 'TokenExpiredError') throw new UnauthorizedException("Token expired");
            throw new UnauthorizedException("Invalid token Provided");
        }
    }

}








