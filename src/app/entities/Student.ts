import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';
import { SubjectStudent } from './SubjectStudent';

@Entity('students')
export class Student {

    @PrimaryColumn()
    private id!: string;

    @Column()
    private name!: string;

    @OneToMany(() => SubjectStudent, subjectStudents => subjectStudents.student)
    subjectStudents!: SubjectStudent[];

    constructor(
        id: string,
        name: string,
    ) {
        this.id = id;
        this.name = name;
    }

}

