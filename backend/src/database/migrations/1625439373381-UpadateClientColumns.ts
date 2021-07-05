import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class UpadateClientColumns1625439373381 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn('clients', new TableColumn({
            name:"nickname",
            type:"varchar",
            default:'""'
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn("clients",'nickname')
    }

}
