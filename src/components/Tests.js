import React, {Component} from 'react'
import Preloader from './Preloader'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {moduleName, reqInit} from '../ducks/tests'

class Tests extends Component {

    getCardList() {
        return Object.values(this.props.tests).map((item, index) => {
            return (
                <div className="col s10 offset-s1 m4" key={index}>
                    <div className="card">
                        <div className="card-image waves-effect waves-block waves-light"><img className="activator"
                                                                                              src={item.img}/><a
                            className="btn-floating halfway-fab waves-effect waves-light red tooltipped btn"
                            data-tooltip="Створити нагадування"><i className="material-icons">add</i></a></div>
                        <div className="card-content"><span
                            className="card-title activator grey-text text-darken-4">{item.name}<i
                            className="material-icons right">more_vert</i></span></div>
                        {item.endDate ? <div className="card-action">Тест потрібно пройти<span
                            className="red-text text-lighten-1 course-endDate">{item.endDate}</span></div> : null}
                        <div className="card-action"><Link to={`/tests/${item.id}`}>Розпочати тест</Link></div>
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
                <div className='row'>
                    <h2>Тести</h2>
                    {this.getCardList()}
                </div>
            </div>
        )
    }
}

export default connect(state => ({
    tests: state[moduleName].tests,
    loading: state[moduleName].loading,
}), {reqInit})(Tests)