import { IsString } from 'class-validator';

export class resumeCreateDto{
    resumeId: number

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
    
    @IsString()
    hobbiesInterest: string
    
    //candId
    // education, experience, project
}