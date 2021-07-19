import {Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn,OneToOne} from 'typeorm';
import { Client } from './Client';
import { User } from './User';

  @Entity("professionals") //nome da tabela
  class Professional {

      @PrimaryGeneratedColumn('uuid', { name: 'id' })
      id:string;

      @Column()
      name:string;

      @Column({default:""})
      nickname:string;

      @Column()
      speciality:string;

      @Column()
      association_code:string;

      @Column()
      crm_crp:string;

      @Column()
      user_id:string;

      @JoinColumn({name:"user_id"})
      @OneToOne(()=> User)
      user:User;

      @OneToMany(()=> Client, client => client.professional,{
        cascade:['insert','update','remove']
      })
      @JoinColumn({name:"client_id"})
      clients!:Client[];

  } 

export {Professional}