import axios from 'axios';
import moment from 'moment';

export const CHANGE_DATE = 'CHANGE_DATE';
export const SHOW_DETAIL_MOVIE = 'SHOW_DETAIL_MOVIE'; 

/* 날짜를 바꾸면 다시 데이터를 get 해온다. */
export async function ChangeDate(date){
    const selectDate = date;
    const title = moment(date).format('YYYY년 MM월 DD일 일일 박스오피스');
    const movieList = await axios.get(`http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=ff32a090cbc342f38a1ffdd2b6576e5e&targetDt=${date}`);
    console.log(movieList);
    return{
        type : CHANGE_DATE,
        dailyMovieList : movieList.data.boxOfficeResult.dailyBoxOfficeList,
        title : title,
        selectDate : selectDate
    }
}

/* list-item 클릭시 자세한 내용을 보여준다. */
export async function ShowDetailMovie(date , index){
    const movieList = await axios.get(`http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=ff32a090cbc342f38a1ffdd2b6576e5e&targetDt=${date}`);
    console.log(movieList.data.boxOfficeResult.dailyBoxOfficeList[index]);
    return{
        type : SHOW_DETAIL_MOVIE,
        selectMovie : movieList.data.boxOfficeResult.dailyBoxOfficeList[index],
    }
}

