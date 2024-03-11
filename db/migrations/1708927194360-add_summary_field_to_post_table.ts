import { MigrationInterface, QueryRunner } from "typeorm";

export class AddSummaryFieldToPostTable1708927194360 implements MigrationInterface {
    name = 'AddSummaryFieldToPostTable1708927194360'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`post\` ADD \`summary\` varchar(255) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`post\` DROP COLUMN \`summary\``);
    }

}
