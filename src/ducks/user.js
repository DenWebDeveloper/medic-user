import axios from '../helpers/axios'
import Cookies from 'js-cookie'
import {Record} from 'immutable'
import M from 'materialize-css'
import history from '../history'

export const moduleName = 'user';
export const appName = 'medic';

export const REQUEST_LOGIN_SEND = `${appName}/${moduleName}/REQUEST_LOGIN_SEND`;
export const REQUEST_LOGIN_SUCCESS = `${appName}/${moduleName}/REQUEST_LOGIN_SUCCESS`;
export const REQUEST_LOGIN_ERROR = `${appName}/${moduleName}/REQUEST_LOGIN_ERROR`;

const ReducerRecord = new Record({
    error: [],
    loading: false,
    user: null,
    token: Cookies.get('token') || ''
});

export default function reducer(state = new ReducerRecord(), action) {
    const {type, payload} = action;
    switch (type) {
        case REQUEST_LOGIN_SEND:
            return state.set('loading', true).set('error', false);
        case REQUEST_LOGIN_SUCCESS:
            return state.set('loading', false).set('error', false).set('user', payload.user).set('token', payload.token);
        case REQUEST_LOGIN_ERROR:
            return state.set('loading', false).set('error', true);
        default:
            return state
    }
}

export function login({email, password}) {
    return (dispatch) => {
        dispatch({
            type: REQUEST_LOGIN_SEND,
        });
        axios.post('/login', {email, password})
            .then((res) => {
                const {token, user} = res.data;
                M.toast({html: 'Успішно'});
                Cookies.set('token', token);
                axios.defaults.headers.common['Authorization'] = token;
                dispatch({
                    type: REQUEST_LOGIN_SUCCESS,
                    payload: {token: token, user: user}
                });
                return history.push('/');
            }).catch(err => {
            console.log(err);
            M.toast({html: 'Помилка', classes: 'red'});
            return dispatch({
                type: REQUEST_LOGIN_ERROR,
            })
        })
    }
}