import { IsString } from 'class-validator';

export class resumeUpdateDto{
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
    // education, experience, project
}