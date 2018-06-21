import React, {Component} from 'react'
import {Link} from 'react-router-dom'

import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import {connect} from "react-redux";
import Preloader from "../Preloader"
import {moduleName, reqInit} from '../../ducks/testPage'

class CoursesPage extends Component {

    render() {
        if(this.props.loading) return <Preloader/>;
        const {id,images,name,endDate,difficulty,approximateTime,topic,numberOfQuestions,TimeForOneQuestion,description} = this.props.testInfo;
        return (
            <div>
                <div className="section">
                    <div className='row'>
                        <div className="col m5 offset-m1">
                            <ImageGallery items={images} autoPlay showFullscreenButton={false} showNav={false}
                                          showPlayButton={false}/>
                        </div>
                        <div className="col m5">
                            <h3 className='mt-0'>{name}</h3>
                            <p>{description}</p>
                            <Link to={`/tests/${id}/1`} className="waves-effect waves-light btn red darken-1"><i className="material-icons right">send</i>Розпочати тест</Link>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col m5 s12 offset-m1 offset-s0">
                            <table className="striped flow-text">
                                <tbody>
                                <tr>
                                    <td>Важкість</td>
                                    <td>{difficulty}</td>
                                </tr>
                                <tr>
                                    <td>Приблизний час</td>
                                    <td>{approximateTime}</td>
                                </tr>
                                <tr>
                                    <td>Тема</td>
                                    <td>{topic}</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="col m5 s12">
                            <table className="striped flow-text">
                                <tbody>
                                <tr>
                                    <td>Кількість питаннь:</td>
                                    <td>{numberOfQuestions}</td>
                                </tr>
                                <tr>
                                    <td>Час на одне питання:</td>
                                    <td>{TimeForOneQuestion}</td>
                                </tr>
                                <tr>
                                    <td>Потрібно пройти до:</td>
                                    <td>{endDate}</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    componentDidMount() {
        this.props.reqInit(this.props.match.params.id)
    }
}

export default connect(state => ({
    testInfo: state[moduleName].testInfo,
    loading: state[moduleName].loading,
}), {reqInit})(CoursesPage)