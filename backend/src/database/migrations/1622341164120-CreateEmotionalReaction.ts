import {MigrationInterface, QueryRunner, Table} from "typeorm";

/*
    tb == the_behavior
    wdyd == 'what_do_you_do
    wd == what_do
    sod == say_or_do

*/

export class CreateEmotionalReaction1622341164120 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.createTable(new Table({
            name:"emotional_reactions",
            columns:[
                {
                    name: "id",
                    type: "varchar",
                    isPrimary: true,
                    isUnique: true,
                    generationStrategy: 'uuid'

                },
                {name:"title",type:"varchar",length:'150'},

                {name:'what_did_you_feel',type:'varchar',length:'150'},

                {name:'Wwat_did_you_think',type:'varchar',length:'150'},

                {name:'what_did_you_do',type:'varchar',length:'150'},

                {name:'when_does_tb_usually_occur',type:'varchar',length:'150'},

                {name:'who_is_present_when_tb_occurs',type:'varchar',length:'150'},

                {name:'where_does_tb_occur',type:'varchar',length:'150'},

                {name:'which_activitie_precede_tb',type:'varchar',length:'150'},

                {name:'wd_other_people_sod_before_tb',type:'varchar',length:'150'},

                {name:'do_you_engage_other_behavior_before_tb_occurs',type:'varchar',length:'150'},

                {name:'circumstances_is_tb_less_likely_to_occur',type:'varchar',length:'150'},

                {name:'what_happens_after_tb',type:'varchar',length:'150'},

                {name:'wdyd_when_tb_occurs',type:'varchar',length:'150'},

                {name:'wd_other_people_do_when_tb_occurs',type:'varchar',length:'150'},

                {name:'what_changes_after_tb_occurs',type:'varchar',length:'150'},

                {name:'wd_you_get_after_tb',type:'varchar',length:'150'},

                {name:'wdyd_or_avoid_after_tb',type:'varchar',length:'150'},
                
                {name:"client_id", type: "varchar"}
               
            ],
            foreignKeys:[
                {
                    name:"FKClient",
                    referencedTableName:"clients",
                    referencedColumnNames:["id"],
                    columnNames:["client_id"],
                    onDelete:"CASCADE",
                    onUpdate:"CASCADE"
                }
            ]
           
        }))

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("emotional_reactions")
    }
}
