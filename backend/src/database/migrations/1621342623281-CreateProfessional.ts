import {MigrationInterface, QueryRunner,Table} from "typeorm";

export class CreateProfessional1621342623281 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.createTable(new Table({
            name:"professionals",
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
                    name:"speciality",
                    type:"varchar"           
                },
            
                {
                    name:"crm_crp",
                    type:"varchar"           
                },                  
                {
                    name:"association_code",
                    type:"varchar"           
                },
                {
                    name:"user_id",
                    type:"varchar",
                },
            ],
            foreignKeys:[
                {
                    name:"FKUser",
                    referencedTableName:"users",
                    referencedColumnNames:["id"],
                    columnNames:["user_id"],
                    onDelete:"CASCADE",
                    onUpdate:"CASCADE"
                }
            ]
        }))

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("professionals")
    }

}
