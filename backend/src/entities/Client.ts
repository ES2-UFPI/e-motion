import {Entity, Column, PrimaryGeneratedColumn,OneToOne,JoinColumn,ManyToOne, OneToMany} from 'typeorm';
import { User } from './User';
import { Professional } from './Professional';
import { Emotional_reaction } from './EmotionalReaction';

  @Entity("clients") //nome da tabela
  class Client {

    @PrimaryGeneratedColumn('uuid', { name: 'id' })
    id:string;

    @Column()
    name:string;

    @Column()
    phone:string;

    @JoinColumn()
    @OneToOne(()=> User)
    user:User;

    @JoinColumn()
    @ManyToOne(()=> Professional)
    professional:Professional;

    @OneToMany(()=> Emotional_reaction, emotion => emotion.client,{
      cascade:['insert','update','remove']
    })
    @JoinColumn({name:"client_id"})
    emotional_reactions!:Emotional_reaction[];

  } 

export {Client}