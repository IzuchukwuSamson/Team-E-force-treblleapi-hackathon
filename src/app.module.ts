import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { AuthModule } from './modules/auth/auth.module';
import { UserModule } from './modules/user/user.module';
import { PostModule } from './modules/post/post.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TokenMiddleware } from './utils/middleware/token.middleware';
import { Post } from './modules/post/entities/post.entity';

@Module({
  imports: [
    MongooseModule.forRootAsync(
      {
       useFactory:async(configSetvice:ConfigService)=>({
       uri:configSetvice.get<string>("CONNECTION_STRING"),
       }),
       inject:[ConfigService]
      }
    ), 
    ConfigModule.forRoot({
      isGlobal: true,
      cache: false,
     // validationSchema: envValidationSchema,
      envFilePath: ['.env'],
    }),
    AuthModule, 
    UserModule,
     PostModule],
  controllers: [],
  providers: [],
})
export class AppModule {
  configure(consumer:MiddlewareConsumer){
    consumer
    .apply(TokenMiddleware)
    .exclude(
    //   {
    //   path:'user/register',method:RequestMethod.POST,
    // },
    
    // {
    //  // path:'user/profile' , method:RequestMethod.POST
    // }
    )
    .forRoutes({
      path: '*',
      method: RequestMethod.ALL,
    });
  }
}
