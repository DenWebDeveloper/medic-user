import React, {Component, Fragment} from 'react'
import {Route, Switch} from 'react-router-dom'

import Header from './Header'
import Main from './routes/Main'
import TestRouter from './routes/Tests'
import CoursesRouter from './routes/Courses'
import Footer from './Footer'
import CalendarTimeline from '../ducks/CalendarTimeline'
import NotFound from './NotFound'

import 'materialize-css/dist/css/materialize.css'


class Root extends Component {

    render() {
        return (
            <Fragment>
                <Header/>
                <Switch>
                    <Route path='/' component={Main} exact/>
                    <Route path='/tests' component={TestRouter}/>
                    <Route path='/courses' component={CoursesRouter}/>
                    <Route path='/calendarTimeline' component={CalendarTimeline} exact/>
                    <Route path='*' component={NotFound} exact/>
                </Switch>
                <Footer/>
            </Fragment>
        )
    }
}

export default Root