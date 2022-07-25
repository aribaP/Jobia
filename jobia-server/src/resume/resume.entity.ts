import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class resume{
    @PrimaryGeneratedColumn()
    resumeId: string

    @Column()
    careerObjective: string

    @Column()
    position: string

    @Column()
    education: object
}