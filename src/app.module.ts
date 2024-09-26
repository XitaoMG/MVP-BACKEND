import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { RestaurantModule } from './restaurant/restaurant.module';
import { PrismaService } from './prisma/prisma.service';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { MenuModule } from './menu/menu.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    AuthModule,
    JwtModule.register({
      global: true,
      signOptions: { expiresIn: '60s' },
    }),
    UserModule,
    RestaurantModule,
    MenuModule,
  ],
  controllers: [
    AppController
  ],
  providers: [
    AppService,
    PrismaService,
    JwtService
  ],
  exports: [],
})
export class AppModule { }
