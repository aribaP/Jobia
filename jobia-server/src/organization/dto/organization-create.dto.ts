import { IsEmail, IsNotEmpty, IsString, Length, Matches } from 'class-validator';


export class organizationCreateDto{
    orgId: number

    @IsNotEmpty({ message: 'Organization name is mandatory.'})
    @IsString()
    orgName: string
    
    @IsNotEmpty({ message: 'Email is mandatory.'})
    @IsEmail()
    orgEmail: string

    @IsString()
    @IsNotEmpty({ message: 'Password is mandatory.'})
    @Length(8,30)
    // @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {message: 'password too weak'},)
    orgPassword: string

}