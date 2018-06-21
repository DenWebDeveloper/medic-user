import React, {Component} from 'react'
import html2canvas from 'html2canvas'
import PropTypes from "prop-types"


class ScreenshotText extends Component {

    constructor(props) {
        super(props);
        this.elementText = React.createRef();
        this.state = {
            elementImg:null
        }
    }

    doScreenshots() {
        html2canvas(this.elementText.current).then(canvas => {
            this.setState(()=>{
                return {
                    elementImg: canvas // Повертає DOM елемент
                }
            })
        }).catch((e) => {
            console.error(e);
        })
    }

    render() {
        if (this.state.elementImg) {
            return this.state.elementImg
        } else {
            return <p ref={this.elementText}>{this.props.text}</p>
        }
    }

    componentDidMount() {
        this.setState(() => {
            return {didScreenshot: true}
        })
    }

}

ScreenshotText.propTypes = {
    text: PropTypes.string.isRequired
};

export default ScreenshotText;