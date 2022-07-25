import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class resume{
    @PrimaryGeneratedColumn()
    resumeId: number

    @Column()
    careerObjective: String

    @Column()
    position: String

    @Column()
    skills: String

    @Column()
    linkedIn: String

    @Column()
    gitHub: String

    @Column()
    hobbiesInterest: String

    // education, experience, project
}   