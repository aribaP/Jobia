import { jobDescription } from "src/job-description/entity/job-description.entity";
import { resume } from "src/resume/entity/resume.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class score{

    @PrimaryGeneratedColumn()
    scoreId: String

    @Column()
    score: number


    @ManyToOne(() => jobDescription, (jdFK) => jdFK.scores)
    public jdFK: jobDescription

    @ManyToOne(() => resume, (resFK) => resFK.scores)
    public resFK: resume

}