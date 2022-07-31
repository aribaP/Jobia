import { Injectable } from '@nestjs/common';
import { CandidateService } from 'src/candidate/candidate.service';
import { JwtService } from '@nestjs/jwt';
import { OrganizationService } from 'src/organization/organization.service';

@Injectable()
export class AuthService {
    constructor(
        private candService: CandidateService, 
        private orgService: OrganizationService,
        private jwtService: JwtService) { }

    async validateCandidate(candEmail: string, candPassword: string) {
        const cand = await this.candService.showCByEmail(candEmail);
        console.log(cand);
        
        if (cand && cand.candPassword === candPassword) {
            return cand;    
        }
        return null;
    }

    async loginCandidate( candidate: any ){
        const payload = { candEmail: candidate.candEmail, sub: candidate.candId};  
        return{
            access_token: this.jwtService.sign(payload),
        }
    }

    async validateOrganization(orgEmail: string, orgPassword: string) {
        const org = await this.orgService.showOByEmail(orgEmail);
        console.log(org);
        
        if (org && org.orgPassword === orgPassword) {
            return org;    
        }
        return null;
    }

    async loginOrganization( organization: any ){
        const payload = { orgEmail: organization.orgEmail, sub: organization.orgId};  
        return{
            access_token: this.jwtService.sign(payload),
        }
    }
}
// async validateUser(username: string, pass: string): Promise<any> {
//     const user = await this.usersService.findOne(username);
//     if (user && user.password === pass) {
//       const { password, ...result } = user;
//       return result;
//     }
//     return null;
//   }
// in a real application, you wouldn't store a password in plain text. You'd instead use a library like bcrypt