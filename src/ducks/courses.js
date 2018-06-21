import axios from 'axios'
import M from 'materialize-css'
import {Record} from 'immutable'

export const moduleName = 'courses';
export const appName = 'medic';
export const INIT_COURSES_SUCCESS = `${appName}/${moduleName}/INIT_COURSES_SUCCESS`;
export const INIT_COURSES_ERROR = `${appName}/${moduleName}/INIT_COURSES_ERROR`;
export const SAVE_COURSES_SUCCESS = `${appName}/${moduleName}/SAVE_COURSES_SUCCESS`;
export const SAVE_COURSES_ERROR = `${appName}/${moduleName}/SAVE_COURSES_ERROR`;

const ReducerRecord = Record({
    loading: true,
    courses: null
});

export default function reducer(state = new ReducerRecord(), action) {
    const {type, payload} = action;
    switch (type) {
        case SAVE_COURSES_SUCCESS:
            return state.update('courses',(val)=>{
                 val[payload.id].bookmark = true;
                return Object.assign({},val)
            });

        case INIT_COURSES_SUCCESS:
            return state.set('loading', false)
                .set('courses', payload.courses);

        case SAVE_COURSES_ERROR:
            return state;

        case INIT_COURSES_ERROR:
            return state;

        default:
            return state
    }
}

export function reqInit() {
    return (dispatch) => axios.get(`http://localhost:9876/rest/courses/init`)
        .then((res) => {
            return dispatch({
                type: INIT_COURSES_SUCCESS,
                payload: {courses: res.data}
            })
        })
        .catch(() => {
            M.toast({html: 'Помилка при завантаженні данних'});
            return dispatch({
                type: INIT_COURSES_ERROR,
            })
        })
}

export function addToBookmark(id) {
    return (dispatch) => axios.get(`http://localhost:9876/rest/courses/save/bookmark/`)
        .then(() => {
            M.toast({html: 'Успішно додано до закладок'});
            return dispatch({
                type: SAVE_COURSES_SUCCESS,
                payload: {id}
            })
        })
        .catch(() => {
            M.toast({html: 'Помилка'});
            return dispatch({
                type: SAVE_COURSES_ERROR,
            })
        })
}