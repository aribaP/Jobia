import { IsString } from 'class-validator';

export class resumeUpdateDto{
    @IsString()
    careerObjective: string
    
    @IsString()
    position: string
    
    @IsString()
    skills: string
    
    @IsString()
    linkedIn: string
    
    @IsString()
    gitHub: string

    // education, experience, project
}