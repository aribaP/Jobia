import { resume } from "src/resume/entity/resume.entity";
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

    @OneToOne(() => resume, (resFK) => resFK.candFK) // specify inverse side as a second parameter
    resFK: resume
}
