import { resume } from "src/resume/entity/resume.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class resumeEduction{
    
    @PrimaryGeneratedColumn()
    eduId: number

    @Column()
    expEndYear: number

    @Column()
    eduInstituteName: String

    @Column()
    eduDegree: String

    // resumeID foriegn key
    @ManyToOne(() => resume, (resFK) => resFK.eduFK) // specify inverse side as a second parameter
    @JoinColumn()
    resFK: resume
}   