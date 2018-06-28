import React from 'react'
import PropTypes from 'prop-types';

function PaginationQuestions(props) {
    return (
        <ul className="pagination">
            {props.questions.map((item, index) => {
                let className = 'waves-effect';

                if(index < props.activeItem) {
                    className = 'disabled';
                } else if(index === props.activeItem) {
                    className = 'active';
                }

                return (
                    <li className={className} key={index}>
                        <a>{index}</a>
                    </li>
                )
            })}
        </ul>
    )
}

PaginationQuestions.propTypes = {
    activeItem: PropTypes.number.isRequired,
    questions: PropTypes.array.isRequired,
};

export default PaginationQuestions;