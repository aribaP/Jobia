import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class resumeProjects{
    
    @PrimaryGeneratedColumn()
    projId: number

    @Column()
    projTitle: String

    @Column()
    projDescription: String

    // resumeID foriegn key
}   