import React, {Component} from 'react'
import {DragSource} from 'react-dnd'
import {getEmptyImage} from 'react-dnd-html5-backend'

class Answer extends Component {

    render() {
        const {connectDragSource, isDragging} = this.props;
        const {text} = this.props.answer;
        return connectDragSource(
            <a className={`collection-item answer-item ${isDragging && 'answer-item-dragging'}`}>{text}</a>
        )
    }

    componentDidMount() {
        this.props.connectPreview(getEmptyImage())
    }

}

const spec = {
    beginDrag(props) {
        return {
            idAnswer: props.answer.idAnswer,
            idTest: props.answer.idTest,
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