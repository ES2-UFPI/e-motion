import { EmotionalReaction } from './../../../models/emotionalReaction';

const INITIAL_STATE: EmotionalReaction = {
    title: '',
    emotions: '',
    what_did_you_do: '',
    what_did_you_think: '',
    when_does_tb_usually_occur: '',
    where_does_tb_occur: '',
    who_is_present_when_tb_occurs: '',
    which_activitie_precede_tb: '',
    wd_other_people_sod_before_tb: '',
    do_you_engage_other_behavior_before_tb_occurs: '',
    what_happens_after_tb: '',
    wdyd_when_tb_occurs: '',
    wd_other_people_do_when_tb_occurs: '',
    what_changes_after_tb_occurs: '',
    wd_you_get_after_tb: ''
};

const emotionalReaction = (state = INITIAL_STATE, action: any) => {
    const baseAction = '@registration/';
    switch (action.type) {

        case `${baseAction}SET_VALUES`:
            return {
                ...state, ...action.payload.values
            }
        case `${baseAction}CLEAR_STEP_ONE`:
            return {
                ...state,
                title: INITIAL_STATE.title,
                emotions: INITIAL_STATE.emotions,
                what_did_you_do: INITIAL_STATE.what_did_you_do,
                what_did_you_think: INITIAL_STATE.what_did_you_think
            }
        case `${baseAction}CLEAR_STEP_TWO`:
            return {
                ...state,
                when_does_tb_usually_occur: INITIAL_STATE.when_does_tb_usually_occur,
                where_does_tb_occur: INITIAL_STATE.where_does_tb_occur,
                who_is_present_when_tb_occurs: INITIAL_STATE.who_is_present_when_tb_occurs,
                which_activitie_precede_tb: INITIAL_STATE.which_activitie_precede_tb,
                wd_other_people_sod_before_tb: INITIAL_STATE.wd_other_people_sod_before_tb,
                do_you_engage_other_behavior_before_tb_occurs: INITIAL_STATE.do_you_engage_other_behavior_before_tb_occurs
            }
        case `${baseAction}CLEAR_STEP_THREE`:
            return {
                ...state,
                what_happens_after_tb: INITIAL_STATE.what_happens_after_tb,
                wdyd_when_tb_occurs: INITIAL_STATE.wdyd_when_tb_occurs,
                wd_other_people_do_when_tb_occurs: INITIAL_STATE.wd_other_people_do_when_tb_occurs,
                what_changes_after_tb_occurs: INITIAL_STATE.what_changes_after_tb_occurs,
                wd_you_get_after_tb: INITIAL_STATE.wd_you_get_after_tb
            }
        case `${baseAction}CLEAR`:
            return {
                ...state, ...INITIAL_STATE
            }
        default:
            return state;
    }
}

export default emotionalReaction;

