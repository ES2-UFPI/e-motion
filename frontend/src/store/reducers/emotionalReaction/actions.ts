import { EmotionalReaction } from './../../../models/emotionalReaction';

export function setValues(values: EmotionalReaction) {
    return {
        type: '@registration/SET_VALUES',
        payload: { values },
    };
}

export function clearStepOne() {
    return {
        type: '@registration/CLEAR_STEP_ONE'
    };
}

export function clearStepTwo() {
    return {
        type: '@registration/CLEAR_STEP_TWO'
    };
}

export function clearStepThree() {
    return {
        type: '@registration/CLEAR_STEP_THREE'
    };
}

export function clear() {
    return {
        type: '@registration/CLEAR'
    }
}