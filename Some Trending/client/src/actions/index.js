import axios from 'axios';

export const HELLO_ALERT = 'HELLO_ALERT';
export const CHANGE_DATE = 'CHANGE_DATE';

async function hello(){
    const reponse = await fetch('/name')
    const body = reponse.json();
    return body;  
} 

export function helloAlert() {
    const data = hello();
    return {
        type : HELLO_ALERT,
        payload : data, 
    }
}

/* 날짜를 바꾸면 다시 데이터를 get 해온다. */
export async function ChangeDate(date){
    console.log(date);
    const data = await axios.get(`http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=ff32a090cbc342f38a1ffdd2b6576e5e&targetDt=${date}`);
    return{
        type : CHANGE_DATE,
        payload : data
    }
}

