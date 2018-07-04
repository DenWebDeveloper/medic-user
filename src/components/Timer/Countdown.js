import React from 'react'
import PropTypes from 'prop-types';
import CircularProgressbar from 'react-circular-progressbar';

import 'react-circular-progressbar/dist/styles.css';

const Countdown = (props, context) => {
    const d = new Date(context.remaining); // auto passed context.remaining
    const {seconds} = {
        seconds: d.getUTCSeconds(),
    };
    return (
        <CircularProgressbar
            percentage={100 -(seconds * 100 / 30)}
            text={`${seconds} ceк`}
        />
    );
};

Countdown.contextTypes = {
    remaining: PropTypes.number,
};

export default Countdown;