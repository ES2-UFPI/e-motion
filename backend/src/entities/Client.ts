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
    nickname:string;

    @Column()
    phone:string;

    @Column()
    user_id:string;

    @Column({nullable:true})
    professional_id:string;

    @JoinColumn({name:"user_id"})
    @OneToOne(()=> User)
    user:User;

    @JoinColumn({name:"professional_id"})
    @ManyToOne(()=> Professional)
    professional:Professional;

    @OneToMany(()=> EmotionalReaction, emotion => emotion.client,{
      cascade:['insert','update','remove']
    })
    @JoinColumn({name:"client_id"})
    emotional_reactions!:EmotionalReaction[];

  } 

export {Client}