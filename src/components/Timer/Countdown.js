import React from 'react'
import PropTypes from 'prop-types';
import CircularProgressbar from 'react-circular-progressbar';

import 'react-circular-progressbar/dist/styles.css';

const Countdown = (props) => {
    const {remainingSec, timeLeftSec} = props;

    return (
        <CircularProgressbar
            percentage={100 -(timeLeftSec * 100 / remainingSec)}
            text={`${Math.ceil(timeLeftSec)} ceк`}
        />
    );
};

Countdown.propTypes = {
    remainingSec: PropTypes.number.isRequired,
    timeLeftSec: PropTypes.number.isRequired,
};

export default Countdown;