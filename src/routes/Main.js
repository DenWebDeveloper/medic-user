import React, {Component} from 'react'
import Notifications from '../components/Notifications'
import Courses from '../components/Courses'
import Tests from '../components/Tests'
import Header from "../components/Header"
import Footer from "../components/Footer"

class Main extends Component {
    render() {
        return (
            <main>
                <Header/>
                <Notifications/>
                <Courses/>
                <Tests/>
                <Footer/>
            </main>
        )
    }
}

export default Main