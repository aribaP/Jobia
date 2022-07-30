import { IsEmail, IsString } from 'class-validator';

export class candidateCreateDto {
    candId: number;

    @IsString()
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
    candCNIC: string;

    @IsString()
    candPhoto: string
}