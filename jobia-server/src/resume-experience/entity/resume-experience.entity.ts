import { resume } from "src/resume/entity/resume.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class resumeExperience{

    @PrimaryGeneratedColumn()
    expId: number

    @Column()
    expYear: String

    @Column()
    expCompanyName: String

    @Column()
    expDescription: String


    // resumeID foriegn key
    @ManyToOne(() => resume, (resFK) => resFK.expFK) // specify inverse side as a second parameter
    @JoinColumn()
    resFK: resume
}   