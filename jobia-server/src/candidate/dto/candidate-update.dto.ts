import { IsEmail, IsString } from 'class-validator';

export class candidateUpdateDto {
    candName: string;

    @IsEmail()
    candEmail: string;

    @IsString()
    candPassword: string;

    @IsString()
    candContactNumber: string;

    @IsString()
    candCity: string;

    @IsString()
    candAddress: string;

    @IsString()
    candPhoto: string
}