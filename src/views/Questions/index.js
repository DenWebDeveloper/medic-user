import React, {Component, Fragment} from 'react'
import api from '../../helpers/axios'
import {moduleName} from '../../ducks/questions'
import {connect} from 'react-redux'
import Preloader from '../../components/Preloader/index'
import Flask from '../../components/Flask/index'
import CustomDragLayer from './CustomDragLayer'
import Breadcrumbs from './Breadcrumbs'
import SimplePagination from '../../components/SimplePagination'
import ScreenshotText from '../../components/ScreenshotText'
import AnswersList from './AnswersList'
import M, {toast} from 'materialize-css'

import './style.css'
import Header from '../../components/Header'
import Footer from '../../components/Footer'


class Questions extends Component {

	constructor(props) {
		super(props)
		this.state = {
			loading: true,
			testName: '',
			activeNumber: 0,
			numberQuestion: 0,
			testId: 0,
			time: 0,
			questionText: '',
			answers: []
		}
	}

	render() {
		const {state, props} = this
		if (state.loading) return <Preloader/>
		return (
			<Fragment>
				<Header/>
				<div className='container'>
					<div className='row'>
						<div className='s9 offset-1'>
							<Breadcrumbs testId={state.testId} testTitle={state.testName}
										 passedQuestions={state.activeNumber}/>
						</div>
					</div>
					<div className='row'>
						<div className='col s6 offset-1'>
							<h5>Навігація по тестам</h5>
							<SimplePagination number={state.numberQuestion}
											  activeItem={state.activeNumber}/>
						</div>
						{/*<div className="col s4">*/}
						{/*<div className="row">*/}
						{/*<div className="col s6 center-align">*/}
						{/*<h6>Час на одне питання:</h6>*/}
						{/*/!*<Timer remainingSec={state.time}/>*!/*/}
						{/*</div>*/}
						{/*</div>*/}
						{/*</div>*/}
					</div>
					<div className='row'>
						<div className='s10 offset-1'>
							<ScreenshotText text={state.questionText}/>
						</div>
					</div>
					<div className='row d-flex'>
						<div className='col s10 l7'>
							<CustomDragLayer/>
							<AnswersList selectedIndexAnswer={props.selectedIndexAnswer} answers={state.answers}/>
							<a onClick={this.sendAnswers.bind(this)}
							   className={`${props.selectedIndexAnswer === null && 'disabled'} btn waves-effect waves-light`}>Далі
								<i className='material-icons right'>send</i>
							</a>
						</div>
						<div className='col s10 l5 center-align'>
							<Flask/>
						</div>
					</div>
				</div>
				<Footer/>
			</Fragment>
		)
	}

	componentDidMount() {
		this.getQuestions()
	}

	sendAnswers() {
		const {testId, numberQuestion, questionId, answers} = this.state
		api.post('/tests/go', {
			testId,
			numberQuestion,
			questionId,
			idAnswer: answers[this.props.selectedIndexAnswer].id
		}).then(() => {
			toast({html: 'Успішно'})
		}).catch(err => {
			console.log(err)
			M.toast({html: 'Помилка. Сробуйте відправити ще раз', classes: 'red'})
		})
	}

	getQuestions() {
		api.get('/tests/go').then((res) => {
			const data = res.data.data
			this.setState(() => ({
				loading: false,
				questionText: data.question.text,
				numberQuestion: data.numberQuestion,
				questionId: data.question.id,
				answers: data.answers,
				testName: data.testName,
				testId: data.testId
			}))
		})
	}

}


export default connect(state => ({
	selectedIndexAnswer: state[moduleName].selectedIndexAnswer,
}))(Questions)