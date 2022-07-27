import { IsEmail, IsString } from 'class-validator';


export class organizationUpdateDto {
    @IsString()
    orgName: string

    @IsEmail()
    orgEmail: string

    @IsString()
    orgPassword: string

    @IsString()
    orgContactNumber: string
}