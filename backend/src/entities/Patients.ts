import {Entity, Column, PrimaryGeneratedColumn,OneToOne,JoinColumn,ManyToOne} from 'typeorm';
import { User } from './User';
import { Professional } from './Professional';

  @Entity("patients") //nome da tabela
  class Patient {

    @PrimaryGeneratedColumn("increment")
    id:number;

    @Column()
    name:string;

    @Column()
    email:string;

    @JoinColumn()
    @OneToOne(()=> User)
    user:User;

    @JoinColumn()
    @ManyToOne(()=> Professional)
    professional:Professional;

  } 

export {Patient}