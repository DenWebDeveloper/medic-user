import React, {Component} from 'react'

import Answer from './Answer'
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
        const {selectedIndexAnswer,selectedCorrectAnswer} = this.props;
        return (
            <div className='collection' ref={this.element}>
                {this.props.answers.map((answer, index) => <Answer isSelected={selectedIndexAnswer===index} selectedCorrectAnswer={selectedCorrectAnswer} answer={answer} index={index} getWidth={this.getWidthElements} key={index}/>)}
            </div>
        )
    }
}

AnswersList.propTypes = {
    answers: PropTypes.array.isRequired,
    selectedIndexAnswer: PropTypes.number.isRequired,
};

export default  AnswersList;