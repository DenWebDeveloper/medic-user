import React, {Component, Fragment} from 'react'
import {Route} from 'react-router-dom'

import Tests from '../components/Tests'
import TestPage from '../components/TestPage/index'
import QuestionPage from '../components/Questions/index'

class TestsRouter extends Component {
    render() {
        return (
            <Fragment>
                <Route path='/tests' component={Tests} exact/>
                <Route path='/tests/:id' component={TestPage} exact/>
                <Route path='/tests/:testId/:questionsNumber' component={QuestionPage} exact/>
            </Fragment>
        )
    }
}

export default TestsRouter;