import {Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn,} from 'typeorm';
import { Client } from './Client';

  @Entity("professionals") //nome da tabela
  class Professional {

      @PrimaryGeneratedColumn('uuid', { name: 'id' })
      id:string;

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

      @OneToMany(()=> Client, client => client.professional,{
        cascade:['insert','update','remove']
      })
      @JoinColumn({name:"client_id"})
      clients!:Client[];

  } 

export {Professional}