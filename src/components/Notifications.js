import React, {Component} from "react"
import {connect} from 'react-redux'
import {check, moduleName} from '../ducks/notifications'

class Notifications extends Component {

    getNotifications() {
        return this.props.notifications.map((item, index) => {
            return (
                <div key={index} className="card-panel"><span
                    className="red-text flow-text">{item.text}</span>
                </div>
            )
        });

    }

    render() {

        return (
            <div className="container">
                <div className="row">
                    <h2>Важливі повідомлення</h2>
                    {this.getNotifications()}
                    <button
                        className={`waves-effect waves-light btn red darken-1 ${!this.props.buttonIsActive ? 'disabled' : false}`}
                        onClick={this.props.check.bind(this)}>Відмітити, як прочитано
                        <i className="material-icons left">check</i>
                    </button>
                </div>
            </div>
        )
    }
}

export default connect(state => ({
    buttonIsActive: state[moduleName].buttonIsActive,
    notifications: state[moduleName].notifications
}), {check})(Notifications)