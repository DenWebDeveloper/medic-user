import React, {Component} from 'react'
import {connect} from "react-redux";

import {moduleName, reqInit} from "../../ducks/questions";

import Preloader from '../Preloader'
import Flask from '../Flask'
import AnswersList from './AnswersList'
import CustomDragLayer from './CustomDragLayer'
import Breadcrumbs from './Breadcrumbs'
import PaginationQuestions from './PaginationQuestions'
import ScreenshotText from '../ScreenshotText'

import "./style.css"


class Questions extends Component {

    constructor(props) {
        super(props);
        this.state = {
            idTest: +this.props.match.params.idTest
        }
    }

    render() {
        if (this.props.loading) return <Preloader/>;

        const {questionsNumber} = this.props.match.params;
        const {testTitle, questions} = this.props;
        const {idTest} = this.state;
        const activeItemQuestions = questions[questionsNumber];

        return (
            <div className="container">
                <div className="row">
                    <div className="s9 offset-1">
                        <Breadcrumbs testId={idTest} testTitle={testTitle} questionsNumber={questionsNumber}/>
                    </div>
                    {/*<div className="s1">*/}
                    {/*<Timer remaining={20000} style={{color: "white", backgroundColor: "#606060", padding: 16}}>*/}
                    {/*<Countdown/>*/}
                    {/*</Timer>*/}
                    {/*</div>*/}
                </div>
                <div className="row">
                    <div className="s9 offset-1">
                        <h5>Навігація по тестам</h5>
                        <PaginationQuestions questions={questions} testId={this.state.idTest} activeItem={+questionsNumber}/>
                    </div>
                </div>
                <div className="row">
                    <div className="s10 offset-1">
                            <ScreenshotText text={activeItemQuestions.question}/>
                    </div>
                </div>
                <div className="row d-flex">
                    <div className="col s10 l7">
                        <CustomDragLayer/>
                        <AnswersList answers={activeItemQuestions.answers}/>
                        <a className="btn waves-effect waves-light mr-10">Перевірити
                            <i className="material-icons right">check</i>
                        </a>
                        <a className="btn waves-effect waves-light">Далі
                            <i className="material-icons right">send</i>
                        </a>
                    </div>
                    <div className="col s10 l5 center-align">
                        <Flask/>
                    </div>
                </div>
            </div>
        )
    }

    static getDerivedStateFromProps(props, state) {
        if (+props.match.params.idTest !== state.idTest) {
            return {
                idTest: +props.match.params.idTest,
            };
        }

        return null;
    }

    componentDidMount() {
        this.props.reqInit(this.state.idTest);
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.idTest !== this.state.idTest) {
            this.props.reqInit(this.state.idTest);
        }
    }

}


export default connect(state => ({
    loading: state[moduleName].loading,
    questions: state[moduleName].questions,
    testTitle: state[moduleName].testTitle
}), {reqInit})(Questions)