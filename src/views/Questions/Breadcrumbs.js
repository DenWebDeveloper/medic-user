import React from 'react'
import {Link} from 'react-router-dom'
import PropTypes from "prop-types";

function Breadcrumbs(props) {
    return (
        <div className='breadcrumbs'>
            <Link to='/' className='breadcrumb red-text text-lighten-2'>Главная</Link>
            <i className='material-icons'>chevron_right</i>
            <Link to='/tests' className='breadcrumb red-text text-lighten-2'>Тести</Link>
            <i className='material-icons'>chevron_right</i>
            <Link to={`/tests/${props.testId}`} className='breadcrumb red-text text-lighten-2'>{props.testTitle}</Link>
            <i className='material-icons'>chevron_right</i>
            <a className='breadcrumb red-text text-lighten-2'>{`№${props.passedQuestions}`}</a>
        </div>
    )
}

Breadcrumbs.propTypes = {
    testId: PropTypes.number.isRequired,
    testTitle: PropTypes.string.isRequired,
    passedQuestions: PropTypes.number.isRequired,
};


export default Breadcrumbs;