import React, {Component} from 'react'
import api from '../helpers/axios'

import Preloader from './Preloader'

class Notifications extends Component {
	constructor(props) {
		super(props)

		this.state = {
			loading: false,
			notifications: [],
			err: null
		}
	}

	notifications() {
		return this.state.notifications.map((item, index) => {
			return (
				<div key={index} className="card-panel">
					<div className="red-text flow-text">{item.text}</div>
					<span className='text-center'>{item.created_at}</span>
				</div>
			)
		})
	}

	render() {
		const {loading} = this.state
		return (
			<div className="container">
				<div className="row">
					<h2>Важливі повідомлення</h2>
					{loading ? <Preloader/> : this.notifications()}
				</div>
			</div>
		)
	}

	componentDidMount() {
		api.get('/notifications').then(res => {
			this.setState(() => ({
				loading: false,
				notifications: res.data.data
			}))
		}).catch(err => {
			console.error(err)
			this.setState(() => ({
				err: 'Cталась помилка. Перевірте інтернет. Обновіть сторінку. Якщо проблема з часом не зникне напишіть в тех підтримку'
			}))
		})
	}

}

export default Notifications