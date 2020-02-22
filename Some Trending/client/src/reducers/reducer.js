import { CHANGE_DATE, SHOW_DETAIL_MOVIE } from '../actions/index';

// 초기값
const initial_state = { 
    dailyMovieList : [],
    title : '',
    selectDate : '',
    selectMovie : [],
}; 

export default function(state = initial_state, action) {
    switch(action.type) {
        case CHANGE_DATE :
            console.log(action.selectDate);
            return {
                ...state,
                dailyMovieList : action.dailyMovieList,
                title : action.title,
                selectDate : action.selectDate
            }
        
        case SHOW_DETAIL_MOVIE:
            return {
                ...state,
                selectMovie : action.selectMovie,
            }  

        default :
            return state;    
    }
}