import { MigrationInterface, QueryRunner } from "typeorm";

export class AddRolesFieldToUserTable1709094332209 implements MigrationInterface {
    name = 'AddRolesFieldToUserTable1709094332209'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`roles\` varchar(255) NOT NULL DEFAULT 'User'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`roles\``);
    }

}
