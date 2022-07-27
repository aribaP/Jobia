import { IsEmail, IsString } from 'class-validator';

export class candidateCreateDto {
    candId: number;

    @IsString()
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
    candCNIC: String;

    @IsString()
    candPhoto: String
}