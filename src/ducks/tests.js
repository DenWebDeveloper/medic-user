import api from '../helpers/axios'
import {toast} from 'materialize-css'
import {List, Record} from 'immutable'

export const moduleName = 'tests'
export const appName = 'medic'
export const INIT_TESTS_SUCCESS = `${appName}/${moduleName}/INIT_TESTS_SUCCESS`
export const INIT_TESTS_ERROR = `${appName}/${moduleName}/INIT_TESTS_ERROR`
export const SAVE_TESTS_SUCCESS = `${appName}/${moduleName}/SAVE_TESTS_SUCCESS`
export const NEW_TEST_SUCCESS = `${appName}/${moduleName}/NEW_TEST_SUCCESS`
export const SAVE_TESTS_ERROR = `${appName}/${moduleName}/SAVE_TESTS_ERROR`

const ReducerRecord = Record({
	loading: true,
	tests: List(),
	activeTest: {}
})

export default function reducer(state = new ReducerRecord(), action) {
	const {type, payload} = action
	switch (type) {
		case INIT_TESTS_SUCCESS:
			return state.set('loading', false)
				.set('tests', payload.tests)
		case NEW_TEST_SUCCESS:
			return state.set('loading', false)
				.set('activeTest', payload.test)
				.update('tests', (tests) => tests.concat(payload.test))
		case SAVE_TESTS_ERROR:
			return state
		case INIT_TESTS_ERROR:
			return state
		default:
			return state
	}
}

export function getTests() {
	return (dispatch) => api.get('/tests')
		.then(res => {
			toast({html: 'Тести успішно завантажені'})
			return dispatch({
				type: INIT_TESTS_SUCCESS,
				payload: {tests: res.data}
			})
		})
		.catch(err => {
			console.error(err)
			toast({html: 'Помилка при завантаженні данних'})
			return dispatch({
				type: INIT_TESTS_ERROR,
			})
		})
}

export function getTest(id) {
	return (dispatch) => api.get(`/tests/${id}`)
		.then(res => {
			toast({html: 'Тест успішно завантажений'})
			return dispatch({
				type: NEW_TEST_SUCCESS,
				payload: {test: res.data.data}
			})
		})
		.catch(err => {
			console.error(err)
			toast({html: 'Помилка при завантаженні данних'})
			return dispatch({
				type: INIT_TESTS_ERROR,
			})
		})
}

export function startTest(id) {
	return (dispatch) => api.get(`/tests/${id}`)
		.then(res => {
			toast({html: 'Тест успішно завантажений'})
			return dispatch({
				type: NEW_TEST_SUCCESS,
				payload: {test: res.data.data}
			})
		})
		.catch(err => {
			console.error(err)
			toast({html: 'Помилка при завантаженні данних'})
			return dispatch({
				type: INIT_TESTS_ERROR,
			})
		})
}
