import React, {Component} from 'react';
import {Link} from 'react-router';

class Home extends Component {
    render(){
        return(
          <div>
            <div>Home</div>
            <Link to="/movie">일일 박스오피스 순위</Link><br />
            <Link to="/melon">멜론차트</Link><br />
          </div>
        );
    }
}

export default Home;