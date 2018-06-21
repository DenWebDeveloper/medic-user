import React, {Component, Fragment} from 'react'
import {Route} from 'react-router-dom'

import Tests from '../Tests'
import TestPage from '../TestPage'
import QuestionPage from '../Questions'

class TestsRouter extends Component {
    render() {
        return (
            <Fragment>
                <Route path='/tests' component={Tests} exact/>
                <Route path='/tests/:id' component={TestPage} exact/>
                <Route path='/tests/:idTest/:questionsNumber' component={QuestionPage} exact/>
            </Fragment>
        )
    }
}

export default TestsRouter;