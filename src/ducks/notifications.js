import axios from 'axios'
import M from 'materialize-css'
import {Record} from 'immutable'

export const moduleName = 'notifications';
export const appName = 'medic';
export const CHECK_ACTIVE_SUCCESS = `${appName}/${moduleName}/CHECK_ACTIVE_SUCCESS`;
export const CHECK_ACTIVE_ERROR = `${appName}/${moduleName}/CHECK_ACTIVE_ERROR`;

const ReducerRecord = new Record({
    buttonIsActive: true,
    notifications: [{
        text: 'Всім прийти завтра на роботу. Юрій Іванович',
    },
        {
            text: 'Всім не йти завтра на роботу. Юрій Іванович',
        }]
});

export default function reducer(state = new ReducerRecord(), action) {
    const {type} = action;
    M.AutoInit();
    switch (type) {
        case CHECK_ACTIVE_SUCCESS:
            return state.set('buttonIsActive',false);
        case CHECK_ACTIVE_ERROR:
            return state;
        default:
            return state
    }
}

export function check() {
    return (dispatch) => axios.get('http://localhost:5000/rest/notifications')
        .then(() => {
            M.toast({html: 'Успішно'});
            return dispatch({
                type: CHECK_ACTIVE_SUCCESS,
            })
        })
        .catch(() => {
            M.toast({html: 'Помилка', classes: 'red'});
            return dispatch({
                type: CHECK_ACTIVE_ERROR,
            })
        })
}