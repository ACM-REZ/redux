import types from './types';

export const counterUp = () => {
    return {
        type: types.counterUp
    }
}

export const counterDown = () => {
    return {
        type: types.counterDown
    }
}