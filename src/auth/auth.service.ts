import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compare } from 'bcrypt';
import { UserRepositoryInterface } from 'src/user/interfaces/user.repository.interface';

@Injectable()
export class AuthService {

    constructor(
        private userService: UserRepositoryInterface,
        private jwtService: JwtService
    ) { }

    async signIn(
        email: string,
        pass: string
    ): Promise<{ access_token: string }> {
        const user = await this.userService.findByEmail(email);
        const isValid = await compare(
            pass,
            user.password,
        )
        if (!isValid) {
            throw new UnauthorizedException('User credentials do not match.')
        }

        const payload = { sub: user.id, email: user.email };
        const retorno = await this.jwtService.signAsync(payload)
        console.log(retorno);

        return {
            access_token: retorno
        };
    }
}