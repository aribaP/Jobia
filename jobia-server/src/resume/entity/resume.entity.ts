import { candidate } from "src/candidate/entity/candidate.entity";
import { score } from "src/score/entity/score.entity";
import { resumeEducation } from "src/resume-education/entity/resume-education.entity";
import { resumeExperience } from "src/resume-experience/entity/resume-experience.entity";
import { resumeProjects } from "src/resume-projects/entity/resume-projects.entity";
import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class resume{
    @PrimaryGeneratedColumn()
    resumeId: number

    @Column({nullable: false})
    careerObjective: String

    @Column({nullable: false})
    position: String

    @Column({nullable: false})
    skills: String

    @Column({nullable: true})
    linkedIn: String

    @Column({nullable: true})
    gitHub: String

    @Column({nullable: true})
    hobbiesInterest: String

    @OneToOne(() => candidate, (candFK) => candFK.resFK) // specify inverse side as a second parameter
    @JoinColumn()
    candFK: candidate
    // education, experience, project

    @OneToMany(() => resumeEducation, (eduFK) => eduFK.resFK) // specify inverse side as a second parameter
    eduFK: resumeEducation

    @OneToMany(() => resumeExperience, (expFK) => expFK.resFK) // specify inverse side as a second parameter
    expFK: resumeExperience

    @OneToMany(() => resumeProjects, (projFK) => projFK.resFK) // specify inverse side as a second parameter
    projFK: resumeProjects

    @OneToMany(() => score, scores => scores.resFK)
    public scores!: score[];
}   