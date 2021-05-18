import {Entity, Column, PrimaryGeneratedColumn,} from 'typeorm';

  @Entity("users") //nome da tabela
  class User {

      @PrimaryGeneratedColumn("increment")
      id:number;

      @Column()
      password:string;

  } 

export {User}