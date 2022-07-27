import { IsString, IsInt} from 'class-validator';

export class jobDescriptionUpdateDto{
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
}