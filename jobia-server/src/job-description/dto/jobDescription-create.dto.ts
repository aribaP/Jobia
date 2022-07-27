import { IsInt, IsString } from 'class-validator';

export class jobDescriptionCreateDto{
    jdId: number

    @IsString()
    jdPosition: string
    
    @IsInt()
    jdMinimumExperience: number
    
    @IsString()
    jdRequiredSkills: string
    
    @IsString()
    jdLocation: string
    
    @IsString()
    jdCity: string

    // orgFK: number      // FK
}