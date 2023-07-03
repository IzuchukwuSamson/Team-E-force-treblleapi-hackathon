import { Module } from '@nestjs/common';
import { AuthService } from '../auth/services/auth.service';
import { AuthController } from '../auth/controllers/auth.controller';

@Module({
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule {}
