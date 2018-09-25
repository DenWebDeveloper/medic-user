import React, {Component} from 'react';
import {connect} from 'react-redux';
import SimpleReactValidator from 'simple-react-validator';

import Header from "../Header";
import Footer from "../Footer";

import {login, moduleName} from '../../ducks/user';

import "./style.css"

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "admin@admin.com",
            password: "zxcasd"
        };

        this.validator = new SimpleReactValidator();

        this.handleInputChange = this.handleInputChange.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }

    render() {
        const {error} = this.props;
        return (
            <div className="login-page">
                <Header/>
                <div className="container">
                    <div className="row">
                        <div className="col s12 m6 offset-m3">
                            <h3>Авторизація</h3>
                        </div>
                        <form className="col s12 m6 offset-m3">
                            <div className="row">
                                <div className={`input-field col s12`}>
                                    <i className="material-icons prefix">account_circle</i>
                                    <input id="email" name="email" type="text" value={this.state.email}
                                           onChange={this.handleInputChange}/>
                                    <label htmlFor="email">Email</label>
                                    <span className='helper-text red-text'>
                                        {this.validator.message('email', this.state.email, 'required|email', 'text-danger', {
                                            default: 'Некоректні дані'
                                        })}
                                    </span>
                                </div>
                            </div>
                            <div className="row">
                                <div
                                    className={`input-field col s12`}>
                                    <i className="material-icons prefix">fingerprint</i>
                                    <input id="password" name="password" type="password" value={this.state.password}
                                           onChange={this.handleInputChange}/>
                                    <label htmlFor="password">Пароль</label>
                                    <span className='helper-text red-text'>
                                        {this.validator.message('password', this.state.password, 'required|min:6|max:20', 'text-danger', {
                                            min: 'Мінімальна кількість символів 6',
                                            max: 'Mаксимальна кількість символів 20',
                                            default: 'Некоректні дані'
                                        })}
                                    </span>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col s12 red-text">{error && 'Сталась помилка'}</div>
                            </div>
                            <div className="row">
                                <div className="col s12 red-text">
                                </div>
                            </div>
                            <div className="row">
                                <div className="col s12">
                                    <button
                                        onClick={this.submitForm}
                                        className={`btn waves-effect waves-light`} type="submit"
                                        name="action">Submit
                                        <i className="material-icons right">send</i>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    submitForm(e) {
        e.preventDefault();
        if (this.validator.allValid()) {
            this.props.login(this.state);
        } else {
            this.validator.showMessages();
            // rerender to show messages for the first time
            this.forceUpdate();
        }
    }
}

export default connect(state => ({
    loading: state[moduleName].loading,
    error: state[moduleName].error
}), {login})(Login);
