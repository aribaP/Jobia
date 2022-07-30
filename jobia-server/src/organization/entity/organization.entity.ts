import { jobDescription } from "src/job-description/entity/job-description.entity";
import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()                          // typeORM Decorator
export class organization{

    @PrimaryGeneratedColumn()
    orgId: number

    @Column()
    orgName: string

    @Column()
    orgEmail: string

    @Column()
    orgPassword: string

    @Column()
    orgContactNumber: string

    @Column()
    orgLogo: string

    @OneToMany(() => jobDescription, (jdFK) => jdFK.orgFK) // specify inverse side as a second parameter
    jdFK: jobDescription[]

}
