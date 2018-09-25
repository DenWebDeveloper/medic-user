import React, {Component, Fragment} from 'react'
import {Route} from 'react-router-dom'

import CoursePage from '../views/Course'
import Courses from '../components/Courses'

class CoursesRouter extends Component {
	render() {
		return (
			<Fragment>
				<Route path='/courses' component={Courses} exact/>
				<Route path='/courses/:id' component={CoursePage} exact/>
			</Fragment>
		)
	}
}

export default CoursesRouter