import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { jwtConstants } from './auth.constant';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor() {
        super({
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        ignoreExpiration: false,
        secretOrKey: jwtConstants.secret,
        });
    }

    async validateCandidate(payload: any) {
        return { candId: payload.sub, candEmail: payload.candEmail };
    }
    async validateOrganization(payload: any) {
        return { orgId: payload.sub, orgEmail: payload.orgEmail };
    }
}