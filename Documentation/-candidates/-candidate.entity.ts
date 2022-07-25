import { resume } from "src/resume/resume.entity";
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class candidate{
    @PrimaryGeneratedColumn()
    candId: string

    @Column()
    candName: string

    @Column()
    candEmail: string

    @Column()
    candPassword: string

    @Column()
    candContactNumber: string

    @Column()
    candCity: string

    @Column()
    candAddress: string

    @Column()
    candCNIC: string

    // @OneToOne(type => resume, resume => resume.resumeId)
    // resume: resume
}
