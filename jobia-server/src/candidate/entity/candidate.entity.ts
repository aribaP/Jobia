import { resume } from "src/resume/entity/resume.entity";
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()                          // typeORM Decorator
export class candidate{
    @PrimaryGeneratedColumn('increment')
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

    @Column()
    candPhoto: String

    @OneToOne(() => resume, (resFK) => resFK.candFK) // specify inverse side as a second parameter
    resFK: resume
}



// {
//     "candId": 1,
//     "candName": "Ariba Mehdi",
//     "candEmail": "ariba.mehdi2001@gmail.com",
//     "candPassword": "ariba",
//     "candContactNumber": "03333333333",
//     "candCity": "Karachi",
//     "candAddress": "FB Area",
//     "candCNIC": "4444444444444"
// }