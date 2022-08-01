import { IsNotEmpty } from "class-validator";
import { jobDescription } from "src/job-description/entity/job-description.entity";
import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()                          // typeORM Decorator
export class organization{

    @PrimaryGeneratedColumn()
    orgId: number

    @Column({nullable: false})
    orgName: string

    @Column({nullable: false})
    orgEmail: string

    @Column({nullable: false})
    orgPassword: string

    @Column({nullable: true})
    orgContactNumber: string

    @Column({nullable: true})
    orgLogo: string

    @IsNotEmpty()
    @OneToMany(() => jobDescription, (jdFK) => jdFK.orgFK) // specify inverse side as a second parameter
    jdFK: jobDescription[]

}
