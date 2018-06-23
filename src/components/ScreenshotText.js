import React, {Component,cloneElement} from 'react'
import html2canvas from 'html2canvas'
import PropTypes from 'prop-types'


class ScreenshotText extends Component {

    constructor(props) {
        super(props);
        this.elementText = React.createRef();
        this.state = {
            elementImg: null
        }
    }

    doScreenshots() {
        html2canvas(this.elementText.current).then(canvas => {
            this.setState(() => {
                return {
                    elementImg: canvas.toDataURL('img/jpg   ') // Повертає DOM елемент
                }
            })
        }).catch((e) => {
            console.error(e);
        })
    }

    render() {
        if (this.state.elementImg) {
            return <img src={this.state.elementImg} width='100%' alt='Текст питання'/>
        } else {
            return <p ref={this.elementText}>{this.props.text}</p>
        }
    }

    componentDidMount() {
        this.doScreenshots()
    }

}

ScreenshotText.propTypes = {
    text: PropTypes.string.isRequired
};

export default ScreenshotText;