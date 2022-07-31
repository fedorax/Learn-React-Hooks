import {
    INCREMENT_COUNT,
    DECREMENT_COUNT,
    RESET_COUNT
} from './count.type';

const CountReducer = (state, action) => {
    switch (action.type) {
        case INCREMENT_COUNT:
            return {
                count: state.count + 1
            };
        case DECREMENT_COUNT:
            return {
                count: state.count - 1
            };
        case RESET_COUNT:
            return {
                count: 0
            };
        default:
            return state;
    }
};

export default CountReducer;