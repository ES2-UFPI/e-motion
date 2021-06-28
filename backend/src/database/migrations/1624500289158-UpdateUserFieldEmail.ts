import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class UpdateUserFieldEmail1624500289158 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.changeColumn("users","email",
        new TableColumn({
            name:"email",
            type:"varchar",
            isUnique:true
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("users")
    }

}
