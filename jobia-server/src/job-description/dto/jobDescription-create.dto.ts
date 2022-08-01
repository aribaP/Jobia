import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class jobDescriptionCreateDto{
    jdId: number

    @IsString()
    @IsNotEmpty()
    jdPosition: string
    
    @IsNotEmpty()
    @IsInt()
    jdMinimumExperience: number
    
    @IsNotEmpty()
    @IsString()
    jdRequiredSkills: string
    
    @IsNotEmpty()
    @IsString()
    jdLocation: string
    
    @IsNotEmpty()
    @IsString()
    jdCity: string

    // orgFK: number      // FK
    // @IsNotEmpty()
    // @IsInt()
    // orgFKOrgId: number
    
}