import axios from 'axios'
import {Record} from 'immutable'

export const moduleName = 'answers';
export const appName = 'medic';
export const INIT_QUESTIONS_SUCCESS = `${appName}/${moduleName}/INIT_ANSWERS_SUCCESS`;
export const INIT_QUESTIONS_ERROR = `${appName}/${moduleName}/INIT_ANSWERS_ERROR`;

const ReducerRecord = Record({
    loading: true,
    questions: null,
    testId: null,
    testTitle: null
});

export default function reducer(state = new ReducerRecord(), action) {
    const {type, payload} = action;
    switch (type) {
        case INIT_QUESTIONS_SUCCESS:
            return state.set('loading', false)
                .set('questions', payload.questions.questions)
                .set('testId', payload.questions.testId)
                .set('testTitle', payload.questions.testTitle);
        case INIT_QUESTIONS_ERROR:
            return state;
        default:
            return state
    }
}

export function reqInit(testId) {
    return (dispatch) => axios.get(`http://localhost:9876/rest/questions/${testId}`)
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