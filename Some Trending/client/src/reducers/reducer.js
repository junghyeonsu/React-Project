import { HELLO_ALERT, CHANGE_DATE } from '../actions/index';

// 초기값
const initial_state = { 
    all : [], 
    date : '',
}; 

export default function(state = initial_state, action) {
    switch(action.type) {
        case HELLO_ALERT :   
            console.log(state.all);
            return { ...state, all : action.payload};

        case CHANGE_DATE :
            //console.log(action.payload);
            return {
                ...state,
                date : action.payload
            }

        default :
            return state;    
    }
}