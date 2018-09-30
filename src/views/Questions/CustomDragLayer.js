import React, {Component} from 'react'
import {DragLayer} from 'react-dnd'
import AnswerDragPreview from '../../ducks/AnswerDragPreview'

const layerStyle = {
    position: 'fixed',
    left: '0',
    top: '0',
    pointerEvents: 'none',
    zIndex: 10000
};

const previewMap = {
    answer: AnswerDragPreview
};

class CustomDragLayer extends Component {

    getItem() {
        if (!this.props.offset) return null;

        const {offset, item, itemType} = this.props;
        const {x, y} = offset;
        const PreviewComponent = previewMap[itemType];
        let style = {
            transform: `translate(${x}px, ${y}px)`,
            width: `${item.width}px`
        };

        return <div className='wrapper-drag-layer-answer  grey' style={style}><PreviewComponent {...item} /></div>
    }

    render() {
        const {isDragging} = this.props;

        if (!isDragging) return null;

        return (
            <div style={layerStyle}>
                {this.getItem()}
            </div>
        );
    }
}

const collect = (monitor) => ({
    isDragging: monitor.isDragging(),
    offset: monitor.getSourceClientOffset(),
    item: monitor.getItem(),
    itemType: monitor.getItemType()
});


export default DragLayer(collect)(CustomDragLayer);
