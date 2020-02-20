import React, {Component} from 'react';
import {Link} from 'react-router';


class Test1 extends Component {
    state = {
      name : '',
    }

    componentDidMount(){
      this.callApi()
        .then(res => this.setState({name : res}))
        .catch(err => console.log(err));
    }

    callApi= async() => {
      const response = await fetch('/name');
      const body = await response.json();
      return body;
    }

    render(){
        return(
          <div>
            <div>{this.state.name ? this.state.name.map((person) => {
              return(
                <div> {person.name} </div>
              )
            }) : ''}</div> 
            <Link to="/">go home</Link>
          </div> 
        );
    }
}

export default Test1;