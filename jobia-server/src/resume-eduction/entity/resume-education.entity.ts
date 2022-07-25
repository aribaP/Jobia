import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class resumeEduction{
    
    @PrimaryGeneratedColumn()
    eduId: number

    @Column()
    expEndYear: number

    @Column()
    eduInstituteName: String

    @Column()
    eduDegree: String


    // resumeID foriegn key
}   