import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {

    constructor(private authService: AuthService) {
        super({ usernameField: 'candEmail', passwordField: 'candPassword' });
    }

    async validate(candEmail: string, candPassword: string): Promise<any> {
        const cand = await this.authService.validateCandidate(candEmail, candPassword);
        if (!cand) {
            throw new UnauthorizedException();
        }
        return cand;
    }
}