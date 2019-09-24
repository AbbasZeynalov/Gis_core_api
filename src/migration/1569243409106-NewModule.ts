import {MigrationInterface, QueryRunner} from "typeorm";

export class NewModule1569243409106 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {

        await queryRunner.query("INSERT INTO `module` (`id`, `created_date`, `updated_date`, `created_by`, `updated_by`, `active`, `name`, `url`) VALUES (6, 'current_timestamp(6).000000', 'current_timestamp(6).000000', '', '', '1', 'risk-pack', 'https://gitlab.com/cavid2409/risk-pack');");
        await queryRunner.query("INSERT INTO `module_versions` (`id`, `module_id`, `version`) VALUES (NULL, '6', '0.0.1'), (NULL, '6', '0.0.2')");
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
    }

}
