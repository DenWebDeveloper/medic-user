import React, {Component, Fragment} from 'react'
import {Route,Switch} from 'react-router-dom'

import Tests from '../components/Tests'
import TestPage from '../views/Test'
import QuestionPage from '../views/Questions/index'

class TestsRouter extends Component {
	render() {
		return (
			<Switch>
				<Route path='/tests' component={Tests} exact/>
				<Route path='/tests/go' component={QuestionPage} exact/>
				<Route path='/tests/:id' component={TestPage} exact/>
			</Switch>
		)
	}
}

export default TestsRouter