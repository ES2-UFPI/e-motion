import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class UpadateProfessionalColumns1625436997301 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn('professionals', new TableColumn({
            name:"nickname",
            type:"varchar",
            default:'""'
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn("professionals",'nickname')
    }

}
