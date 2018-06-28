import React from 'react'
import {Link} from 'react-router-dom'
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {checkCorrectAnswer, moduleName} from "../../ducks/questions";

function Buttons(props) {
    const {selectedIndexAnswer, testId, passedQuestions, selectedCorrectAnswer} = props;
    let isActiveCheck = false;
    let isActiveNext = false;

    if (selectedIndexAnswer || selectedIndexAnswer === 0) {
        isActiveCheck = true
    }
    console.log(selectedCorrectAnswer,'::::selectedCorrectAnswe');
    if (selectedCorrectAnswer !== null) {
        isActiveCheck = false;
        isActiveNext = true
    }
    console.log(selectedCorrectAnswer,"test",isActiveNext);
    return (
        <div>
            <a className={`${!isActiveCheck && 'disabled'} btn waves-effect waves-light mr-10`}
               onClick={props.checkCorrectAnswer}>Перевірити
                <i className='material-icons right'>check</i>
            </a>
            <Link to={`/tests/${testId}/${passedQuestions + 1}`}
                  className={`${!isActiveNext && 'disabled'} btn waves-effect waves-light`}>Далі
                <i className='material-icons right'>send</i>
            </Link>
        </div>
    )
}

Buttons.propTypes = {
    selectedIndexAnswer: PropTypes.number.isRequired,
    testId: PropTypes.number.isRequired,
    passedQuestions: PropTypes.number.isRequired,
    selectedCorrectAnswer: PropTypes.any.isRequired
};


export default connect(state => ({
    passedQuestions: state[moduleName].passedQuestions,
    selectedIndexAnswer: state[moduleName].selectedIndexAnswer,
    selectedCorrectAnswer: state[moduleName].selectedCorrectAnswer
}), {checkCorrectAnswer})(Buttons)

