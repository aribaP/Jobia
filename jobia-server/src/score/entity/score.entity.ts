import { jobDescription } from "src/job-description/entity/job-description.entity";
import { resume } from "src/resume/entity/resume.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class score{

    @PrimaryGeneratedColumn()
    scoreId: String

    @Column({ type: 'numeric', precision: 65, scale: 2 })
    score: number


    @ManyToOne(() => jobDescription, (jdFK) => jdFK.scores,{
        onDelete: 'CASCADE'
    })
    public jdFK: jobDescription

    @ManyToOne(() => resume, (resFK) => resFK.scores,{
        onDelete: 'CASCADE'
    })
    public resFK: resume

}