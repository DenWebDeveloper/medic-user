import React, {Component} from 'react'
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom'

import {moduleName, reqInit} from '../../ducks/questions';

import Preloader from '../Preloader'
import Flask from '../Flask'
import AnswersList from './AnswersList'
import CustomDragLayer from './CustomDragLayer'
import Breadcrumbs from './Breadcrumbs'
import PaginationQuestions from './PaginationQuestions'
import ScreenshotText from '../ScreenshotText'
import Buttons from './Buttons'

import './style.css'


class Questions extends Component {

    constructor(props) {
        super(props);
        this.state = {
            testId: +this.props.match.params.testId
        };
    }

    checkTestNumberRedirect() {
        const {passedQuestions} = this.props;
        const {questionsNumber} = this.props.match.params;

        return passedQuestions !== +questionsNumber
    }

    render() {
        if (this.props.loading) return <Preloader/>;

        const {questionsNumber} = this.props.match.params;
        const {testTitle, questions, passedQuestions, selectedIndexAnswer,selectedCorrectAnswer} = this.props;
        const {testId} = this.state;
        const question = questions[passedQuestions];

        if (this.checkTestNumberRedirect()) return <Redirect to={`/tests/${testId}/${passedQuestions}`}/>;

        return (
            <div className='container'>
                <div className='row'>
                    <div className='s9 offset-1'>
                        <Breadcrumbs testId={testId} testTitle={testTitle} passedQuestions={passedQuestions}/>
                    </div>
                    {/*<div className='s1'>*/}
                    {/*<Timer remaining={20000} style={{color: 'white', backgroundColor: '#606060', padding: 16}}>*/}
                    {/*<Countdown/>*/}
                    {/*</Timer>*/}
                    {/*</div>*/}
                </div>
                <div className='row'>
                    <div className='s9 offset-1'>
                        <h5>Навігація по тестам</h5>
                        <PaginationQuestions questions={Object.values(questions)}
                                             activeItem={+questionsNumber}/>
                    </div>
                </div>
                <div className='row'>
                    <div className='s10 offset-1'>
                        <ScreenshotText text={question.question}/>
                    </div>
                </div>
                <div className='row d-flex'>
                    <div className='col s10 l7'>
                        <CustomDragLayer/>
                        <AnswersList selectedIndexAnswer={selectedIndexAnswer} selectedCorrectAnswer={selectedCorrectAnswer} answers={question.answers}/>
                        <Buttons testId={testId} />
                    </div>
                    <div className='col s10 l5 center-align'>
                        <Flask/>
                    </div>
                </div>
            </div>
        )
    }

    static getDerivedStateFromProps(props, state) {
        if (+props.match.params.testId !== state.testId) {
            return {
                testId: +props.match.params.testId,
            };
        }

        return null;
    }

    componentDidMount() {
        this.props.reqInit(this.state.testId);
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.testId !== this.state.testId) {
            this.props.reqInit(this.state.testId);
        }
    }

}


export default connect(state => ({
    loading: state[moduleName].loading,
    questions: state[moduleName].questions,
    testTitle: state[moduleName].testTitle,
    passedQuestions: state[moduleName].passedQuestions,
    selectedIndexAnswer: state[moduleName].selectedIndexAnswer,
    selectedCorrectAnswer: state[moduleName].selectedCorrectAnswer
}), {reqInit})(Questions)