import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()                          // typeORM Decorator
export class organization{

    @PrimaryGeneratedColumn()
    orgId: string

    @Column()
    orgName: string

    @Column()
    orgEmail: string

    @Column()
    orgPassword: string

    @Column()
    orgContactNumber: string

}
