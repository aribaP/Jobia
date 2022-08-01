import { resume } from "src/resume/entity/resume.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class resumeEducation{
    
    @PrimaryGeneratedColumn()
    eduId: number

    @Column({nullable: false})
    eduEndYear: number

    @Column({nullable: false})
    eduInstituteName: String

    @Column({nullable: false})
    eduDegree: String

    // resumeID foriegn key
    @ManyToOne(() => resume, (resFK) => resFK.eduFK) // specify inverse side as a second parameter
    @JoinColumn()
    resFK: resume
}   