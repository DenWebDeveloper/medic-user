import {combineReducers} from 'redux'
import {routerReducer as router} from 'react-router-redux'
import notificationsReducer,{moduleName as notificationsModule} from '../ducks/notifications'
import coursesReducer,{moduleName as coursesModule} from '../ducks/courses'
import testsReducer,{moduleName as testsModule} from '../ducks/tests'
import testPageReducer,{moduleName as testPageModule} from '../ducks/testPage'
import questionsReducer,{moduleName as questionsModule} from '../ducks/questions'

export default combineReducers({
    router,
    [notificationsModule]: notificationsReducer,
    [coursesModule]: coursesReducer,
    [testsModule]: testsReducer,
    [testPageModule]: testPageReducer,
    [questionsModule]: questionsReducer,
})