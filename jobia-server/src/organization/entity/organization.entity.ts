import { jobDescription } from "src/job-description/entity/job-description.entity";
import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()                          // typeORM Decorator
export class organization{

    @PrimaryGeneratedColumn()
    orgId: number

    @Column({default: "00000"})
    orgName: string

    @Column({default: "00000"})
    orgEmail: string

    @Column({default: "00000"})
    orgPassword: string

    @Column({default: "00000"})
    orgContactNumber: string

    @Column({default: "00000"})
    orgLogo: string

    @OneToMany(() => jobDescription, (jdFK) => jdFK.orgFK) // specify inverse side as a second parameter
    jdFK: jobDescription[]

}
