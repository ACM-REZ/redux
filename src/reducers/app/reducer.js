import types from './types';

const InitialState = {
    counter: 0,
}

export default (state = InitialState, {type, payload}) => {
    switch(type) {
        case types.counterUp:
            return {
                ...state,
                counter: state.counter + 1
            }
        case types.counterDown:
            return {
                ...state,
                counter: state.counter - 1
            }
        default:
            return state;
    }
}