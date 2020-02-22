import React, {Component} from 'react';
import {connect} from 'react-redux';

class MovieDetail extends Component {
    render(){
        const {detail, date} = this.props;
        return(
            <table className="table"> 
                <tbody>
                    <tr>
                        <td>영화제목</td>
                        <td><strong>{detail.movieNm}</strong></td>
                    </tr>
                    <tr>
                        <td>순위</td>
                        <td>{detail.rank}</td>
                    </tr>
                    <tr>
                        <td>개봉날짜</td>
                        <td>{detail.openDt}</td>
                    </tr>
                    <tr>
                        <td>{date} 기준 누적 매출액</td>
                        <td>{detail.salesAcc}</td>
                    </tr>
                    <tr>
                        <td>{date} 기준 누적 관객수</td>
                        <td>{detail.audiAcc}</td>
                    </tr>
                </tbody>
            </table>
        );
    }
}

function mapStateToProps(state){
    return{
        detail : state.reducer.selectMovie,
        date : state.reducer.selectDate
    }
}

export default connect(mapStateToProps)(MovieDetail);