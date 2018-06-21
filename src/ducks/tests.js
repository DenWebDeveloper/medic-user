import axios from 'axios'
import M from 'materialize-css'
import {Record} from 'immutable'

export const moduleName = 'tests';
export const appName = 'medic';
export const INIT_TESTS_SUCCESS = `${appName}/${moduleName}/INIT_TESTS_SUCCESS`;
export const INIT_TESTS_ERROR = `${appName}/${moduleName}/INIT_TESTS_ERROR`;
export const SAVE_TESTS_SUCCESS = `${appName}/${moduleName}/SAVE_TESTS_SUCCESS`;
export const SAVE_TESTS_ERROR = `${appName}/${moduleName}/SAVE_TESTS_ERROR`;

const ReducerRecord = Record({
    loading: true,
    tests: null
});

export default function reducer(state = new ReducerRecord(), action) {
    const {type, payload} = action;
    switch (type) {
        case SAVE_TESTS_SUCCESS:
            return state.update('courses',(val)=>{
                val[payload.id].bookmark = true;
                return Object.assign({},val)
            });

        case INIT_TESTS_SUCCESS:
            return state.set('loading', false)
                .set('tests', payload.tests);

        case SAVE_TESTS_ERROR:
            return state;

        case INIT_TESTS_ERROR:
            return state;

        default:
            return state
    }
}

export function reqInit() {
    return (dispatch) => axios.get(`http://localhost:9876/rest/tests/init`)
        .then((res) => {
            return dispatch({
                type: INIT_TESTS_SUCCESS,
                payload: {tests: res.data}
            })
        })
        .catch(() => {
            M.toast({html: 'Помилка при завантаженні данних'});
            return dispatch({
                type: INIT_TESTS_ERROR,
            })
        })
}
