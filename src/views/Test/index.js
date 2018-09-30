import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import api from '../../helpers/axios'
import Preloader from '../../components/Preloader/index'
import {getTest, moduleName} from '../../ducks/tests'

import 'react-image-gallery/styles/css/image-gallery.css'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

class TestPage extends Component {
	render() {
		if (Object.values(this.props.test).length === 0) return <Preloader/>
		const {
			id, images, name,
			additional_info, description
		} = this.props.test
		return (
			<div>
				<Header/>
				<div className="section">
					<div className='row'>
						<div className="col m5 offset-m1">
							{/*<ImageGallery items={images} autoPlay showFullscreenButton={false} showNav={false}*/}
							{/*showPlayButton={false}/>*/}
						</div>
						<div className="col m5">
							<h3 className='mt-0'>{name}</h3>
							{description.map(item => {
								return <p>{item}</p>
							})}
							<button onClick={this.startTest.bind(this)}
									className="waves-effect waves-light btn red darken-1"><i
								className="material-icons right">send</i>Розпочати тест
							</button>
						</div>
					</div>
					<div className="row">
						<div className="col m5 s12 offset-m1 offset-s0">
							<table className="striped flow-text">
								<tbody>
								{additional_info.map(item => {
									return (
										<Fragment>
											<tr>
												<td>{item.name}</td>
												<td>{item.value}</td>
											</tr>
										</Fragment>
									)
								})}
								</tbody>
							</table>
						</div>
						<div className="col m5 s12 offset-m1 offset-s0">
							<table className="striped flow-text">
								<tbody>
								{additional_info.map(item => {
									return (
										<Fragment>
											<tr>
												<td>{item.name}</td>
												<td>{item.value}</td>
											</tr>
										</Fragment>
									)
								})}
								</tbody>
							</table>
						</div>
					</div>
				</div>
				<Footer/>
			</div>
		)
	}

	componentDidMount() {
		const {id} = this.props.match.params

		if (this.props.tests.size) {
			this.props.tests.find(item => item.id === id)
		} else {
			this.props.getTest(id)
		}
	}

	startTest() {
		api.get(`/tests/${+this.props.test.id}/start`).then(() => {
			this.props.history.push('/tests/go')
		})
	}
}

export default connect(state => ({
	tests: state[moduleName].tests,
	test: state[moduleName].activeTest,
}), {getTest})(TestPage)