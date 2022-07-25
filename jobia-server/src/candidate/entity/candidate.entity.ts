import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()                          // typeORM Decorator
export class candidate{
    @PrimaryGeneratedColumn()
    candId: number

    @Column()
    candName: String

    @Column()
    candEmail: String

    @Column()
    candPassword: String

    @Column()
    candContactNumber: String

    @Column()
    candCity: String

    @Column()
    candAddress: String

    @Column()
    candCNIC: String

    // @OneToOne(type => resume, resume => resume.resumeId)
    // resume: resume
}
