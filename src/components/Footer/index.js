import React, {Component} from 'react'

import './style.css'

class Footer extends Component {

	render() {
		return (
			<footer className="page-footer">
				<div className="container">
					<div className="row">
						<div className="col m4 s12">
							<h5 className="white-text">Pharm Community</h5>
							<ul className="social">
								<li><a className="waves-effect waves-light btn red lighten-2">YouTube</a></li>
								<li><a className="waves-effect waves-light btn red lighten-2">Facebook</a></li>
								<li><a className="waves-effect waves-light btn red lighten-2">Instagram</a></li>
							</ul>
						</div>
						<div className="col m4 s12 documents">
							<h5 className="white-text">Офіційні документи</h5>
							<ul>
								<li><a className="grey-text text-lighten-3" href="#">Документи</a></li>
								<li><a className="grey-text text-lighten-3" href="#">Ліцензія</a></li>
								<li><a className="grey-text text-lighten-3" href="#">Конфіденційність</a></li>
								<li><a className="grey-text text-lighten-3" href="#">Угода</a></li>
							</ul>
						</div>
						<div className="col m4 s12">
							<div className="row">
								<div className="col s12">
									<h5 className="white-text">Підписатись на розсилку</h5>
								</div>
								<div className="input-field col s12"><i className="material-icons prefix">textsms</i>
									<input className="autocomplete" id="autocomplete-input" type="text"
										   placeholder="Введіть свою почту"/>
								</div>
								<div className="col s12">
									<small>Ми ніколи не будемо ділитися вашою електронною поштою з ким-небудь ще.
									</small>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="footer-copyright">
					<div className="container center-align">Всі права захищені | 2018 | Зроблено з любовю</div>
				</div>
			</footer>
		)
	}

}

export default Footer
