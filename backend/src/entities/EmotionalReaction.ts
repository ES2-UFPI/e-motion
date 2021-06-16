import {Entity, Column, PrimaryGeneratedColumn, JoinColumn, ManyToOne,} from 'typeorm';
import { Client } from './Client';

  @Entity("emotional_reactions") 
  class EmotionalReaction {

    @PrimaryGeneratedColumn('uuid', { name: 'id' })
    id:string;

    @Column({default:""})
    title:string;

    @Column({default:""})
    what_did_you_feel:string;

    @Column({default:""})
    what_did_you_think:string;

    @Column({default:""})
    what_did_you_do:string;

    @Column({default:""})
    when_does_tb_usually_occur:string;

    @Column({default:""})
    who_is_present_when_tb_occurs:string;

    @Column({default:""})
    where_does_tb_occur:string;

    @Column({default:""})
    which_activitie_precede_tb:string;

    @Column({default:""})
    wd_other_people_sod_before_tb:string;

    @Column({default:""})
    do_you_engage_other_behavior_before_tb_occurs:string;

    @Column({default:""})
    circumstances_is_tb_less_likely_to_occur:string;

    @Column({default:""})
    what_happens_after_tb:string;

    @Column({default:""})
    wdyd_when_tb_occurs:string;

    @Column({default:""})
    wd_other_people_do_when_tb_occurs:string;

    @Column({default:""})
    what_changes_after_tb_occurs:string;

    @Column({default:""})
    wd_you_get_after_tb:string;

    @Column({default:""})
    wdyd_or_avoid_after_tb:string;
      
    @Column()
    client_id:string;

    @JoinColumn({name:"client_id"})
    @ManyToOne(()=> Client)
    client:Client;

} 

export {EmotionalReaction}