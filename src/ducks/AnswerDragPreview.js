import React from 'react';
import PropTypes from 'prop-types'

const AnswerDragPreview = (props) => {
    return (
        <div>{props.textAnswer}</div>
    );
};

AnswerDragPreview.propTypes = {
    textAnswer: PropTypes.string.isRequired
};

export default AnswerDragPreview;

