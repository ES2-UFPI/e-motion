import {MigrationInterface, QueryRunner, Table} from "typeorm";


export class CreateEmotion1622342796231 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.createTable(new Table({
            name:"emotions",
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
                }
               
            ],
           
        }))

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("emotions")
    }

}

