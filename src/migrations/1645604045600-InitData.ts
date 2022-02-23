import { MigrationInterface, QueryRunner } from 'typeorm';

export class InitData21645604045600 implements MigrationInterface {

    name = 'InitData21645604045600'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('INSERT INTO subjects (id, name) VALUES (\'5f2754f5-fb99-4fdb-9a9f-86800c8d3d10\', \'math\')');
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        //
    }

}
