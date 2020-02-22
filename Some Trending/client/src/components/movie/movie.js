/* module,library */
import React , {Component} from 'react';
import moment from 'moment';
import {connect} from 'react-redux';

/* actions */
import {ChangeDate, ShowDetailMovie} from '../../actions/index';

/* components */
import DatePicker from './date_picker';
import MovieDetail from './movie_detail';

/* css */
import './movie.css';

class Movie extends Component {
    componentDidMount = () =>{
      const today = new Date();   
      const changeToday = moment(today).subtract(1,'day').format('YYYYMMDD');
      this.props.ChangeDate(changeToday);
    }

    onClickItem = e => {
        this.props.ShowDetailMovie(this.props.selectDate,e.target.id-1);
    }

    render(){
        const { dailyMovieList,title } = this.props;
        return(
            <div>
                <div>
                    <h1 className="bg-success"> {title} </h1>
                    <h4 className="bg-warning"> 영화진흥위원회 API 특성상 하루전 데이터까지 받아옵니다. </h4>
                </div>
                <div className="row">
                    <DatePicker />
                    <ul className="col-md-4 list-group"> {dailyMovieList ? dailyMovieList.map((data) => {
                        return (
                            <li onClick={this.onClickItem} id={data.rank} key={data.rank} className="list-group-item"> {data.rank}위 {data.movieNm} </li>          
                        )
                    }) : ''} </ul>
                    <div className="col-md-8 details">
                        <MovieDetail/>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return { 
        dailyMovieList : state.reducer.dailyMovieList,
        title : state.reducer.title,
        selectDate : state.reducer.selectDate
    }
}

export default connect(mapStateToProps,{ChangeDate, ShowDetailMovie})(Movie);