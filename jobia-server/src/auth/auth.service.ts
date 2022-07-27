import { Injectable } from '@nestjs/common';
import { CandidateService } from 'src/candidate/candidate.service';
import { loginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';
import { candidate } from 'src/candidate/entity/candidate.entity';

@Injectable()
export class AuthService {
    constructor(
        private candService: CandidateService, 
        private jwtService: JwtService) { }

    async validateCandidate(candEmail: string, candPassword: string) {
        const cand = await this.candService.showCByEmail(candEmail);
        console.log(cand);
        
        if (cand && cand.candPassword === candPassword) {
            return cand;    
        }
        return null;
    }

    async login( candidate: any ){
        const payload = { candEmail: candidate.candEmail, sub: candidate.candId};  
        return{
            access_token: this.jwtService.sign(payload),
        }
    }
}
