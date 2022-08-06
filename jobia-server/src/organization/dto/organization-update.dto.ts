import { IsEmail, IsNotEmpty, IsString } from 'class-validator';


export class organizationUpdateDto {
    @IsString()
    orgName: string

    @IsEmail()
    orgEmail: string

    @IsString()
    orgContactNumber: string

    @IsString()
    @IsNotEmpty({ message: 'Password is mandatory.'})
    // @Length(8,30)
    // @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {message: 'password too weak'},)
    orgPassword: string
}