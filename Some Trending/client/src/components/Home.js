import React, {Component} from 'react';
import {Link} from 'react-router';


class Home extends Component {
    render(){
        return(
          <div>
            <div>Home</div>
            <Link to="/test1">test1</Link><br />
            <Link to="/test2">test2</Link><br />  
            <Link to="/movie">일일 박스오피스 순위</Link><br />
          </div>
        );
    }
}

export default Home;