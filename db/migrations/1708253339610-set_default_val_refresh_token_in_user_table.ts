import { MigrationInterface, QueryRunner } from 'typeorm';

export class SetDefaultValRefreshTokenInUserTable1708253339610
  implements MigrationInterface
{
  name = 'SetDefaultValRefreshTokenInUserTable1708253339610';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`user\` CHANGE \`refresh_token\` \`refresh_token\` varchar(255) NULL`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`user\` CHANGE \`refresh_token\` \`refresh_token\` varchar(255) NOT NULL`,
    );
  }
}
