import React, {Component} from 'react'

import Answer from './Answer'
import {moduleName, reqInit} from '../../ducks/testPage'
import {connect} from 'react-redux'
import PaginationQuestions from './PaginationQuestions'
import PropTypes from 'prop-types'

class AnswersList extends Component {

    constructor(props) {
        super(props);
        this.element = React.createRef();
    }

    getWidthElements = () => {
        return this.element.current.offsetWidth
    };

    render() {
        return (
            <div className='collection' ref={this.element}>
                {this.props.answers.map((answer, index) => <Answer answer={answer} getWidth={this.getWidthElements} key={index}/>)}
            </div>
        )
    }
}

PaginationQuestions.propTypes = {
    answers: PropTypes.array.isRequired
};

export default  AnswersList;