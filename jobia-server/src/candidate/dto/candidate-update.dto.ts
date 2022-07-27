import { IsEmail, IsString } from 'class-validator';

export class candidateUpdateDto {
    candName: String;

    @IsEmail()
    candEmail: String;

    @IsString()
    candPassword: String;

    @IsString()
    candContactNumber: String;

    @IsString()
    candCity: String;

    @IsString()
    candAddress: String;

    @IsString()
    candPhoto: String
}