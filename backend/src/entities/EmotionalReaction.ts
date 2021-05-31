import {Entity, Column, PrimaryGeneratedColumn, JoinColumn, ManyToOne,} from 'typeorm';
import { Client } from './Client';

  @Entity("emotional_reactions") 
  class Emotional_reaction {

    @PrimaryGeneratedColumn('uuid', { name: 'id' })
    id:string;

    @Column()
    title:string;

    @Column()
    what_did_you_feel:string;

    @Column()
    Wwat_did_you_think:string;

    @Column()
    what_did_you_do:string;

    @Column()
    when_does_tb_usually_occur:string;

    @Column()
    who_is_present_when_tb_occurs:string;

    @Column()
    where_does_tb_occur:string;

    @Column()
    which_activitie_precede_tb:string;

    @Column()
    wd_other_people_sod_before_tb:string;

    @Column()
    do_you_engage_other_behavior_before_tb_occurs:string;

    @Column()
    circumstances_is_tb_less_likely_to_occur:string;

    @Column()
    what_happens_after_tb:string;

    @Column()
    wdyd_when_tb_occurs:string;

    @Column()
    wd_other_people_do_when_tb_occurs:string;

    @Column()
    what_changes_after_tb_occurs:string;

    @Column()
    wd_you_get_after_tb:string;

    @Column()
    wdyd_or_avoid_after_tb:string;
      
    @Column()
    client_id:string;

    @JoinColumn()
    @ManyToOne(()=> Client)
    client:Client;

} 

export {Emotional_reaction}