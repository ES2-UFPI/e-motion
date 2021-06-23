import {Entity, Column, PrimaryGeneratedColumn,OneToOne,JoinColumn,ManyToOne, OneToMany} from 'typeorm';
import { User } from './User';
import { Professional } from './Professional';
import { EmotionalReaction } from './EmotionalReaction';

  @Entity("clients") //nome da tabela
  class Client {

    @PrimaryGeneratedColumn('uuid', { name: 'id' })
    id:string;

    @Column()
    name:string;

    @Column()
    phone:string;

    @Column()
    user_id:string;

    @JoinColumn({name:"user_id"})
    @OneToOne(()=> User)
    user:User;

    @JoinColumn()
    @ManyToOne(()=> Professional)
    professional:Professional;

    // @OneToMany(()=> EmotionalReaction, emotion => emotion.client,{
    //   cascade:['insert','update','remove']
    // })
    // @JoinColumn({name:"client_id"})
    // emotional_reactions!:EmotionalReaction[];

  } 

export {Client}