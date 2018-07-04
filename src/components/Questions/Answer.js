import React, {Component} from 'react'
import {DragSource} from 'react-dnd'
import {getEmptyImage} from 'react-dnd-html5-backend'
import {connect} from "react-redux";
import {moduleName} from "../../ducks/questions";

const styleState = {
    isSelected: 'grey lighten-2 black-text',
    selectedCorrectAnswerClassTrue: 'teal white-text',
    selectedCorrectAnswerClassFalse: 'red white-text'
};

class Answer extends Component {

    render() {
        const {connectDragSource, isDragging, isSelected, selectedCorrectAnswer} = this.props;
        const {text} = this.props.answer;
        let style = null;

        if (selectedCorrectAnswer !== null && isSelected) {
            selectedCorrectAnswer ? style = styleState.selectedCorrectAnswerClassTrue : style = styleState.selectedCorrectAnswerClassFalse;
        } else if (isSelected) {
            style = styleState.isSelected;
        }

        return connectDragSource(
            <a className={`collection-item answer-item ${style}
                         ${isDragging && 'answer-item-dragging'}`}>{text}</a>
        )
    }

    componentDidMount() {
        this.props.connectPreview(getEmptyImage())
    }

}

const spec = {
    beginDrag(props) {
        return {
            indexAnswer: props.index,
            textAnswer: props.answer.text,
            width: props.getWidth()
        }
    },
    canDrag(props) {
        return props.selectedCorrectAnswer === null
    }
};

const collect = (connect, monitor) => ({
    connectDragSource: connect.dragSource(),
    connectPreview: connect.dragPreview(),
    isDragging: monitor.isDragging(),
});

export default connect(state => ({
    selectedCorrectAnswer: state[moduleName].selectedCorrectAnswer
}), null)(DragSource('answer', spec, collect)(Answer))