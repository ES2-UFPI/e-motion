import {Entity, Column, PrimaryGeneratedColumn,} from 'typeorm';


  @Entity("emotions") //nome da tabela
  class Emotion {

    @PrimaryGeneratedColumn('uuid', { name: 'id' })
    id:string;

    @Column()
    name:string;

  } 

export {Emotion}