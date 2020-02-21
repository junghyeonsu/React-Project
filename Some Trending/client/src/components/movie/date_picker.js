import React , {Component} from 'react';
import { connect } from 'react-redux';
import {ChangeDate} from '../../actions/index';
import moment from 'moment';

import Calendar from 'react-calendar';

class DateSelector extends Component {
    state = {
        startDate : new Date(),
        maxDate : new Date(),
    }

    handleChange = e => {
        this.setState({startDate : e});
    };

    onClickDay = e => {
        const hhi = moment(e).format('YYYYMMDD');
        console.log(hhi);
    }

    render(){
        return(
                <Calendar
                onChange={this.handleChange} 
                value={this.state.startDate}
                onClickDay={this.onClickDay}
                />
        );
    }
}
 
export default connect(null,{ChangeDate})(DateSelector);