import {MigrationInterface, QueryRunner,Table} from "typeorm";

export class CreateUser1621342549073 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.createTable( new Table({
            name:"users",
            columns:[
                {
                    name: "id",
                    type: "varchar",
                    isPrimary: true,
                    isUnique: true,
                    generationStrategy: 'uuid'

                },
                {
                    name:"password",
                    type:"varchar"
                    
                },
                {
                    name:"email",
                    type:"varchar"
                    
                },
                {
                    name:"type",
                    type:"INTEGER",
                    
                    
                },
            
            
            ]
        }))

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("users")
    }

}
