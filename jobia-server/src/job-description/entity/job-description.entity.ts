import { organization } from "src/organization/entity/organization.entity";
import { score } from "src/score/entity/score.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()                          // typeORM Decorator
export class jobDescription{
    @PrimaryGeneratedColumn()
    jdId: number

    @Column()
    jdPosition: string

    @Column()
    jdMinimumExperience: number

    @Column()
    jdRequiredSkills: string

    @Column()
    jdLocation: string

    @Column()
    jdCity: string

   // foreign key : orgID
    @ManyToOne(() => organization, (orgFK) => orgFK.jdFK) // specify inverse side as a second parameter
    @JoinColumn()
    orgFK: organization

    @OneToMany(() => score, scores => scores.jdFK)
    public scores!: score[];

}


