import { resume } from "src/resume/entity/resume.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class resumeProjects{
    
    @PrimaryGeneratedColumn()
    projId: number

    @Column()
    projTitle: String

    @Column()
    projDescription: String

    // resumeID foriegn key
    @ManyToOne(() => resume, (resFK) => resFK.projFK) // specify inverse side as a second parameter
    @JoinColumn()
    resFK: resume
}   