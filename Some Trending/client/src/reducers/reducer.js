import { HELLO_ALERT } from '../actions/index';

// 초기값
const initial_state = { all : [] }; 

export default function(state = initial_state, action) {
    switch(action.type) {
        case HELLO_ALERT :   
            console.log(state.all);
            return { ...state, all : action.payload};

        default :
        return state;
    }
}