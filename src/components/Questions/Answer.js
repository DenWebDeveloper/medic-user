import React, {Component} from 'react'
import {DragSource} from 'react-dnd'
import {getEmptyImage} from 'react-dnd-html5-backend'


class Answer extends Component {

    render() {
        const {connectDragSource, isDragging, isSelected,selectedCorrectAnswer} = this.props;
        let selectedCorrectAnswerClass = null;

        if(selectedCorrectAnswer) {
            selectedCorrectAnswerClass = '';
        } else {
            selectedCorrectAnswerClass = '';
        }

        const {text} = this.props.answer;
        return connectDragSource(
            <a className={`collection-item answer-item
                           ${isDragging && 'answer-item-dragging'}
                           ${isSelected && 'red lighten-2 white-text'}`}>{text}</a>
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
    }
};

const collect = (connect, monitor) => ({
    connectDragSource: connect.dragSource(),
    connectPreview: connect.dragPreview(),
    isDragging: monitor.isDragging(),
});

export default DragSource('answer', spec, collect)(Answer);