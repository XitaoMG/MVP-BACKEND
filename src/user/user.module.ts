import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { UserController } from './controllers/user.controller';
import { ProviderCreateUser } from './use-cases/create-user.use-case';
import { ProviderDeleteUser } from './use-cases/delete-user.use-case';
import { ProviderFindAll } from './use-cases/find-all.use-case';
import { ProviderFindOne } from './use-cases/find-one.use-case';
import { ProviderFindByEmail } from './use-cases/find-by-email.use-case';
import { ProviderUpdateUser } from './use-cases/update-user.use-case';
import { ProviderUserRepository } from './repositories/user.repository';

@Module({
  controllers: [UserController],
  providers: [
    ProviderCreateUser,
    ProviderDeleteUser,
    ProviderFindAll,
    ProviderFindOne,
    ProviderUserRepository,
    ProviderFindByEmail,
    ProviderUpdateUser,
  ],
  exports: [ProviderUserRepository],
  imports: [PrismaModule],
})
export class UserModule { }
