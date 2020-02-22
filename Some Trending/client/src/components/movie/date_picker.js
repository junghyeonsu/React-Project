import React , {Component} from 'react';
import { connect } from 'react-redux';
import {ChangeDate} from '../../actions/index';
import moment from 'moment';
import Calendar from 'react-calendar';

class DateSelector extends Component {

    onClickDay = e => {
        const selectDate = moment(e).format('YYYYMMDD');
        this.props.ChangeDate(selectDate);
    }

    render(){
        const today = new Date();
        return(
                <Calendar
                onClickDay={this.onClickDay}
                maxDate={today}
                />
        );
    }
}
 
export default connect(null,{ChangeDate})(DateSelector);