import React , {Component} from 'react';
import axios from 'axios'; 
import DatePicker from './date_picker';

class Movie extends Component {
    state = {
        movie : [],
        showRange : '',
        firstDate : '20200220', 
    }

    componentDidMount = async() =>{
     this.callMovieList();
    }

    callMovieList = async() => {
        await axios.get(`http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=ff32a090cbc342f38a1ffdd2b6576e5e&targetDt=${this.state.firstDate}`)
        .then(res => { this.setState({ 
            movie : res.data.boxOfficeResult.dailyBoxOfficeList,
            showRange : res.data.boxOfficeResult.showRange,
         })});
    }

    onClickBtn = () => {
        console.log(this.state.movie);
    }

    onClickDateBtn = () => {
        console.log("hi");
    }

    render(){
        const { movie, showRange } = this.state;
        return(
            <div>
                <h1>날짜 : {showRange}</h1><br />
                <DatePicker />
                <ul className="list-group"> {movie ? movie.map((data) => {
                    return (
                        <li key={data.rank} className="list-group-item"> {data.rank}위 {data.movieNm} </li>          
                    )
                }) : ''} </ul>

                <div> <button className="btn" onClick={this.onClickBtn}>확인</button> </div>
            </div>
        )
    }
}


export default Movie;