import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {saveTime} from '../../ducks/questions';
import Countdown from './Countdown'
import {connect} from "react-redux";

class Timer extends Component {

    constructor(props) {
        super(props);

        this.startDate = new Date();

        this.state = {
            timeLeftMilliSec: this.props.remainingSec * 1000
        }
    }


    tick() {
        const timeDifferenceMilliSec = new Date - this.startDate;
        this.startDate = new Date();
        this.setState((prevState) => {
                return {
                    timeLeftMilliSec: prevState.timeLeftMilliSec - 1000
                }
            },()=>console.log(this.state.timeLeftMilliSec / 1000)
        )
    }

    render() {
        const {remainingSec} = this.props;
        const {timeLeftMilliSec } = this.state;
        return <Countdown timeLeftSec={timeLeftMilliSec / 1000} remainingSec={remainingSec}/>;
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }
}

Timer.propTypes = {
    remainingSec: PropTypes.number.isRequired, // msec
};

export default connect(null, {saveTime})(Timer)