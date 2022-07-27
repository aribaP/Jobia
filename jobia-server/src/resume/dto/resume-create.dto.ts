import { IsString } from 'class-validator';

export class resumeCreateDto{
    resumeId: number

    @IsString()
    careerObjective: String
    
    @IsString()
    position: String
    
    @IsString()
    skills: String
    
    @IsString()
    linkedIn: String
    
    @IsString()
    gitHub: String
    
    @IsString()
    hobbiesInterest: String
    
    // candId: number
    // education, experience, project
}