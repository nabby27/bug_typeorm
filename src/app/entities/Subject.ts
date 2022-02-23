import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';
import { SubjectStudent } from './SubjectStudent';

@Entity('subjects')
export class Subject {

    @PrimaryColumn()
    private id!: string;

    @Column()
    private name!: string;

    @OneToMany(() => SubjectStudent, subjectStudents => subjectStudents.subject)
    subjectStudents!: SubjectStudent[];

    constructor(
        id: string,
        name: string,
    ) {
        this.id = id;
        this.name = name;
    }

}
