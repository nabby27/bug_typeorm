import { Column, Entity, ManyToOne } from 'typeorm';
import { Student } from './Student';
import { Subject } from './Subject';

@Entity('students_subjects')
export class SubjectStudent {

    @ManyToOne(() => Subject, subject => subject.subjectStudents, { primary: true })
    subject!: Subject;

    @ManyToOne(() => Student, student => student.subjectStudents, { primary: true })
    student!: Student;

    @Column()
    private mark!: number;

    constructor(
        subject: Subject,
        student: Student,
        mark: number,
    ) {
        this.subject = subject;
        this.student = student;
        this.mark = mark;
    }

}

