import api from '../helpers/axios'
import {Record} from 'immutable'

export const moduleName = 'questions'
export const appName = 'medic'
export const INIT_QUESTIONS_SUCCESS = `${appName}/${moduleName}/INIT_ANSWERS_SUCCESS`
export const INIT_QUESTIONS_ERROR = `${appName}/${moduleName}/INIT_ANSWERS_ERROR`
export const CHECK_CORRECT_ANSWER = `${appName}/${moduleName}/CHECK_CORRECT_ANSWER`
export const CHANGE_SELECTED_ANSWER = `${appName}/${moduleName}/CHANGE_SELECTED_ANSWER`
export const CHANGE_NEXT_QUESTIONS = `${appName}/${moduleName}/CHANGE_NEXT_QUESTIONS`
export const SAVE_TIME_ALL = `${appName}/${moduleName}/SAVE_TIME_ALL`

const ReducerRecord = Record({
	loading: true,
	passedQuestions: 0,
	selectedIndexAnswer: null,
	timeRecommendedSec: null,
	timeAllSec: null,
	questions: null,
	testId: null,
	testTitle: null,
	selectedCorrectAnswer: null,
	timeSec: null
})

export default function reducer(state = new ReducerRecord(), action) {
	const {type, payload} = action
	switch (type) {
		case INIT_QUESTIONS_SUCCESS:
			return state.set('loading', false)
				.set('questions', payload.questions.questions)
				.set('testId', payload.questions.testId)
				.set('testTitle', payload.questions.testTitle)
				.set('timeRecommendedSec', payload.questions.timeRecommendedSec)
				.set('timeAllSec', payload.questions.timeAllSec)
				.set('timeSec', payload.questions.timeSec)
		case INIT_QUESTIONS_ERROR:
			return state
		case CHANGE_SELECTED_ANSWER :
			return state.set('selectedIndexAnswer', payload.indexAnswer)
		case CHECK_CORRECT_ANSWER :
			const answerIsCorrect = state.getIn(['questions'])[state.passedQuestions].answers[state.selectedIndexAnswer].isCorrect
			if (answerIsCorrect) {
				return state.set('selectedCorrectAnswer', true)
			} else {
				return state.set('selectedCorrectAnswer', false)
			}
		case CHANGE_NEXT_QUESTIONS:
			const passedQuestions = state.get('passedQuestions')
			return state.set('passedQuestions', passedQuestions + 1).set('selectedIndexAnswer', null).set('selectedCorrectAnswer', null)

		case SAVE_TIME_ALL:
			return state.set('timeAllSec', payload.time)

		default:
			return state
	}
}

export function reqInit(testId) {
	return (dispatch) => api.get('/tests/18/18')
		.then((res) => {
			return dispatch({
				type: INIT_QUESTIONS_SUCCESS,
				payload: {questions: res.data}
			})
		})
		.catch(() => {
			return dispatch({
				type: INIT_QUESTIONS_ERROR,
			})
		})
}

export function checkCorrectAnswer() {
	return {
		type: CHECK_CORRECT_ANSWER,
	}
}

export function nextQuestions() {
	return {
		type: CHANGE_NEXT_QUESTIONS,
	}
}

export function changeSelectedIndexAnswer(indexAnswer) {
	return {
		type: CHANGE_SELECTED_ANSWER,
		payload: {indexAnswer}
	}
}

export function saveTime(time) {
	return {
		type: SAVE_TIME_ALL,
		payload: {time}
	}
}