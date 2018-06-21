import React from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types';

const PaginationQuestions = (props) => {
    return (
        <ul className="pagination">
            {props.questions.map((item, index) => {
                return (
                    <li className={`${index === props.activeItem ? 'active' : 'waves-effect'}`}>
                        <Link to={`/tests/${props.testId}/${index}`} key={index}>{index}</Link>
                    </li>
                )
            })}
        </ul>
    )
};

PaginationQuestions.propTypes = {
    testId: PropTypes.number.isRequired,
    activeItem: PropTypes.number.isRequired,
    questions: PropTypes.array.isRequired,
};

export default PaginationQuestions;