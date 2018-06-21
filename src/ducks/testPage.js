import axios from 'axios'
import M from 'materialize-css'
import {Record} from 'immutable'
import {replace} from 'react-router-redux'

export const moduleName = 'testPage';
export const appName = 'medic';
export const INIT_TEST_SUCCESS = `${appName}/${moduleName}/INIT_TEST_SUCCESS`;
export const INIT_TEST_ERROR = `${appName}/${moduleName}/INIT_TEST_ERROR`;

const ReducerRecord = Record({
    loading: true,
    testInfo: null
});

export default function reducer(state = new ReducerRecord(), action) {
    const {type, payload} = action;
    switch (type) {
        case INIT_TEST_SUCCESS:
            return state.set('loading', false)
                .set('testInfo', payload.testInfo);
        default:
            return state
    }
}

export function reqInit(testId) {
    return (dispatch) => axios.get(`http://localhost:9876/rest/tests/init/${testId}`)
        .then((res) => {
            return dispatch({
                type: INIT_TEST_SUCCESS,
                payload: {testInfo: res.data}
            })
        })
        .catch(() => {
            return dispatch(replace('/'))
        })
}
