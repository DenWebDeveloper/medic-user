import React, {Component} from "react"
import {connect} from 'react-redux'
import Preloader from './Preloader'
import {Link} from 'react-router-dom'
import {addToBookmark, moduleName, reqInit} from '../ducks/courses'

class Courses extends Component {

    handleBookmarks(id) {
        this.props.addToBookmark(id);
    }

    getCardList() {
        return Object.values(this.props.courses).map((item, index) => {
            return (
                <div className="col s12 m4" key={index}>
                    <div className="card">
                        <div className="card-image waves-effect waves-block waves-light">
                            <img className="activator" src='/storage/tests/20/preview.png'/>
                        </div>
                        <div className="card-content"><span
                            className="card-title activator grey-text text-darken-4">{item.name}<i
                            className="material-icons right">more_vert</i></span></div>
                        <div className="card-action"><Link to={`/courses/${item.id}`}>Пройти курс</Link><a href="">Перейти
                            до тесту</a></div>
                        <div className="card-reveal"><span className="card-title grey-text text-darken-4">{item.name}<i
                            className="material-icons right">close</i></span>
                            <p>{item.description}</p>
                        </div>
                    </div>
                </div>
            )
        });

    }

    componentDidMount() {
        this.props.reqInit()
    }

    render() {
        if (this.props.loading) return <Preloader/>;
        return (
            <div className="container">
                <div className="row">
                    <h2>Курси</h2>
                    {this.getCardList()}
                </div>
            </div>
        )
    }
}

export default connect(state => ({
    courses: state[moduleName].courses,
    loading: state[moduleName].loading,
}), {addToBookmark, reqInit})(Courses)