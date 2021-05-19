import { MigrationInterface, QueryRunner,Table } from "typeorm";

export class CreatePatient1621342877532 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.createTable(new Table({
            name:"patients",
            columns:[
                {
                    name:"id",
                    type:"INTEGER",
                    isPrimary:true,
                    generationStrategy:"increment",
                    isGenerated:true

                },
                {
                    name:"name",
                    type:"varchar"
                    
                },
                {
                    name:"email",
                    type:"varchar"
                    
                },
                {
                    name:"user_id",
                    type:"INTEGER",
                },
                {
                    name:"professional_id",
                    type:"INTEGER",
                    isNullable:true
                }
            ],
            foreignKeys:[
                {
                    name:"FKUserPatient",
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
        await queryRunner.dropTable("patients")
    }


}
