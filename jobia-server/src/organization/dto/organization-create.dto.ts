import { IsEmail, IsString } from 'class-validator';


export class organizationCreateDto{
    orgId: number

    @IsString()
    orgName: string
    
    @IsEmail()
    orgEmail: string

    @IsString()
    orgPassword: string
    
    @IsString()
    orgContactNumber: string
}