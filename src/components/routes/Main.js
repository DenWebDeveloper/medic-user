import React, {Component} from 'react'
import Notifications from '../Notifications'
import Courses from '../Courses'
import Tests from '../Tests'

class Main extends Component {
    render() {
        return (
            <main>
                <Notifications/>
                <Courses/>
                <Tests/>
            </main>
        )
    }
}

export default Main;