import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class resumeExperience{

    @PrimaryGeneratedColumn()
    expId: number

    @Column()
    expYear: String

    @Column()
    expCompanyName: String

    @Column()
    expDescription: String

  

    // resumeID foriegn key
}   