import axios from 'axios'
import {Record} from 'immutable'

export const moduleName = 'questions';
export const appName = 'medic';
export const INIT_QUESTIONS_SUCCESS = `${appName}/${moduleName}/INIT_ANSWERS_SUCCESS`;
export const INIT_QUESTIONS_ERROR = `${appName}/${moduleName}/INIT_ANSWERS_ERROR`;
export const CHECK_CORRECT_ANSWER = `${appName}/${moduleName}/CHECK_CORRECT_ANSWER`;
export const CHANGE_SELECTED_ANSWER = `${appName}/${moduleName}/CHANGE_SELECTED_ANSWER`;

const ReducerRecord = Record({
    loading: true,
    passedQuestions: 2,
    selectedIndexAnswer: null,
    questions: null,
    testId: null,
    testTitle: null,
    selectedCorrectAnswer:null,
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
        case CHANGE_SELECTED_ANSWER :
            return state.set('selectedIndexAnswer', payload.indexAnswer);
        case CHECK_CORRECT_ANSWER :
            const  answerIsCorrect = state.getIn(['questions'])[state.passedQuestions].answers[state.selectedIndexAnswer].isCorrect;
            if(answerIsCorrect) {
                return state.set('selectedCorrectAnswer',true)
            } else {
                return state.set('selectedCorrectAnswer',false)
            }
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

export function checkCorrectAnswer() {
    return {
        type: CHECK_CORRECT_ANSWER,
    }
}

export function changeSelectedIndexAnswer(indexAnswer) {
    return {
        type: CHANGE_SELECTED_ANSWER,
        payload: {indexAnswer}
    }
}