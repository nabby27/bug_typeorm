import {MigrationInterface, QueryRunner} from "typeorm";

export class InitSchema1645604045599 implements MigrationInterface {
    name = 'InitSchema1645604045599'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "subjects" ("id" character varying NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_1a023685ac2b051b4e557b0b280" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "students_subjects" ("mark" integer NOT NULL, "subjectId" character varying NOT NULL, "studentId" character varying NOT NULL, CONSTRAINT "PK_d41c73cc6fc3f604e57c495a1ed" PRIMARY KEY ("subjectId", "studentId"))`);
        await queryRunner.query(`CREATE TABLE "students" ("id" character varying NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_7d7f07271ad4ce999880713f05e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "students_subjects" ADD CONSTRAINT "FK_2b0638a0243d3e7ba2632a3a5c2" FOREIGN KEY ("subjectId") REFERENCES "subjects"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "students_subjects" ADD CONSTRAINT "FK_18ee5ea414c640682aebf7817d7" FOREIGN KEY ("studentId") REFERENCES "students"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "students_subjects" DROP CONSTRAINT "FK_18ee5ea414c640682aebf7817d7"`);
        await queryRunner.query(`ALTER TABLE "students_subjects" DROP CONSTRAINT "FK_2b0638a0243d3e7ba2632a3a5c2"`);
        await queryRunner.query(`DROP TABLE "students"`);
        await queryRunner.query(`DROP TABLE "students_subjects"`);
        await queryRunner.query(`DROP TABLE "subjects"`);
    }

}
