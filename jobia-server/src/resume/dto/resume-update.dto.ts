import { IsString } from 'class-validator';
import { resumeProjects } from 'src/resume-projects/entity/resume-projects.entity';
import { Column, JoinColumn, JoinTable, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

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

    // @OneToMany(() => resumeProjects, (projFK) => projFK.resFK,  {
    // }) 
    // @JoinTable({name: 'projId'})
    // @PrimaryGeneratedColumn()
    // projId: number
    // education, experience, project
}