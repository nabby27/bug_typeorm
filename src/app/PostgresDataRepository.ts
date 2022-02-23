import { Connection, createConnection } from 'typeorm';
import { Subject } from './entities/Subject';

let connectionDB: null | Promise<Connection> = null;

export class PostgresDataRepository {

    constructor() {
    }

    private getConnectionDB(): Promise<Connection> {
        if (!connectionDB) {
            connectionDB = createConnection('issue_typeorm_db');
        }

        return connectionDB;
    }

    public async getAllData(): Promise<Subject[]> {
        const connection = await this.getConnectionDB();
        const repo = await connection.getRepository(Subject);

        const data = repo
            .createQueryBuilder('subject')
            .leftJoinAndSelect('subject.subjectStudents', 'subjectStudent')
            .leftJoinAndSelect('subjectStudent.student', 'student')
            .getMany();

        return data;
    }

}
