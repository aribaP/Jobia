import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()                          // typeORM Decorator
export class jobDescription{
    @PrimaryGeneratedColumn()
    jdId: string

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
}


