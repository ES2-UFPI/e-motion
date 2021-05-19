import {Entity, Column, PrimaryGeneratedColumn,} from 'typeorm';

  @Entity("professionals") //nome da tabela
  class Professional {

      @PrimaryGeneratedColumn("increment")
      id:number;

      @Column()
      name:string;

      @Column()
      email:string;

      @Column()
      speciality:string;

      @Column()
      association_code:string;

      @Column()
      crm_crp:string;

  } 

export {Professional}