import {MigrationInterface, QueryRunner,Table} from "typeorm";

export class CreateClient1622339738086 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.createTable(new Table({
            name:"clients",
            columns:[
                {
                    name: "id",
                    type: "varchar",
                    isPrimary: true,
                    isUnique: true,
                    generationStrategy: 'uuid'

                },
                {
                    name:"name",
                    type:"varchar"
                    
                },
                {
                    name:"phone",
                    type:"varchar"
                    
                },
                {
                    name:"user_id",
                    type:"varchar",
                },
                {
                    name:"professional_id",
                    type:"varchar",
                    isNullable:true
                }
            ],
            foreignKeys:[
                {
                    name:"FKUserUser",
                    referencedTableName:"users",
                    referencedColumnNames:["id"],
                    columnNames:["user_id"],
                    onDelete:"CASCADE",
                    onUpdate:"CASCADE"
                },
                {
                    name:"FKProfessional",
                    referencedTableName:"professionals",
                    referencedColumnNames:["id"],
                    columnNames:["professional_id"],
                    onDelete:"SET NULL",
                    onUpdate:"SET NULL"
                }
            ]
        }))

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("clients")
    }


}
