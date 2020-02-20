import React, {Component} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {helloAlert} from '../actions/index';
import { bindActionCreators } from 'redux';

class Test2 extends Component {
    componentDidMount(){
        this.props.helloAlert();
    }

    state = {
        name : '',
    }

    onClickBtn = () =>{
        this.props.helloAlert();    
    }

    render(){
        return(
          <div>
            <div>Test2</div> 
            <Link to="/">go home</Link>
            <button onClick={this.onClickBtn}>클릭</button>
            <div>
                {this.props.data ? this.props.data.map((person) => {
                    return(
                        <div> {person.name} </div>
                    )
                }): 'null'}
            </div>
          </div>   
        );
    }
}

function mapStateToProps(state){
    return { data : state.reducer.all }
}

function mapDispatchToProps(dispatch){
   return bindActionCreators({helloAlert : helloAlert},dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(Test2);