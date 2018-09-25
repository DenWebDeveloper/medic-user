import React, {Component} from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'
import Cookies from 'js-cookie'
import Main from '../routes/Main'
import TestRouter from '../routes/Tests'
import CoursesRouter from '../routes/Courses'
import NotFound from './NotFound'
import Login from './Login'
import Registration from './Registration'

import PrivateRoute from '../helpers/PrivateRouter'

import 'materialize-css/dist/css/materialize.css'

class Root extends Component {

	checkAuth(Component) {
		if (Cookies.get('token')) return <Redirect to="/"/>
		return Component
	}

	render() {
		return (
			<Switch>
				<Route path='/login' render={() => this.checkAuth(<Login/>)} exact/>
				<Route path='/registration' render={() => this.checkAuth(<Registration/>)} exact/>
				<PrivateRoute path='/' component={Main} exact/>
				<PrivateRoute path='/tests' component={TestRouter}/>
				<PrivateRoute path='/courses' component={CoursesRouter}/>
				<PrivateRoute path='/support' component={TestRouter}/>
				<Route path='*' component={NotFound} exact/>
			</Switch>
		)
	}
}

export default Root