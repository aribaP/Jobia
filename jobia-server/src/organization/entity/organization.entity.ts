import { IsNotEmpty } from "class-validator";
import { jobDescription } from "src/job-description/entity/job-description.entity";
import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()                          // typeORM Decorator
export class organization{

    @PrimaryGeneratedColumn()
    orgId: number

    @Column({nullable:  true})
    orgName: string

    @Column({nullable:  true})
    orgEmail: string

    @Column({nullable:  true})
    orgPassword: string

    @Column({nullable: true})
    orgContactNumber: string

    @Column({nullable: true})
    orgLogo: string

    @IsNotEmpty()
    @OneToMany(() => jobDescription, (jdFK) => jdFK.orgFK) // specify inverse side as a second parameter
    jdFK: jobDescription[]

}
