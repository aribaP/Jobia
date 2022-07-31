import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport'
import { userInfo } from 'os';
import { CandidateService } from 'src/candidate/candidate.service';
import { AuthService } from './auth.service';
import { loginDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {

   constructor(private authService: AuthService) {  }

    @UseGuards(AuthGuard('local'))
    @Post('/loginCand')
    async loginC(@Request() req: any){
        return this.authService.loginCandidate(req.user);

    }

    @UseGuards(AuthGuard('local'))
    @Post('/loginOrg')
    async loginO(@Request() req: any){
        return this.authService.loginOrganization(req.user);

    }

}
