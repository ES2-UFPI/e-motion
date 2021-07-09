import {Entity, Column, PrimaryGeneratedColumn,} from 'typeorm';


  @Entity("users") //nome da tabela
  class User {

      @PrimaryGeneratedColumn('uuid', { name: 'id' })
      id:string;

      @Column({unique:true})
      email:string;

      @Column()
      password:string;

      @Column()
      type:number;

      @Column()
      avatar:number


  }   

export {User}