import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Form extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            textArea: '',
            checkPersonalData: false,
            formErrors: {email: '', textArea: '',checkPersonalDataValid:''},
            emailValid: false,
            textAreaValid: false,
            checkPersonalDataValid: false,
            formValid: false
        }
    }

    handleUserInput(e) {
        const name = e.target.name;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        console.log(value);
        this.setState({[name]: value},
            () => { this.validateField(name, value) });
    }

    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let emailValid = this.state.emailValid;
        let textAreaValid = this.state.textAreaValid;
        let checkPersonalDataValid = this.state.checkPersonalDataValid;

        switch(fieldName) {

            case 'email':
                emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                fieldValidationErrors.email = emailValid ? '' : ' is invalid';
                break;

            case 'password':
                passwordValid = value.length >= 6;
                fieldValidationErrors.password = passwordValid ? '': ' is too short';
                break;
            default:
                break;
        }
        this.setState({formErrors: fieldValidationErrors,
            emailValid: emailValid,
            passwordValid: passwordValid
        }, this.validateForm);
    }
    validateForm() {
        this.setState({formValid: this.state.emailValid &&
            this.state.passwordValid});
    }



    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <form className='col s12'>
                        <div className='row'>
                            <div className='input-field col s12'>
                                <i className='material-icons prefix'>account_circle</i>
                                <input id='icon_prefix' name='email' type='text' onChange={this.handleUserInput.bind(this)} value={this.state.email}/>
                                <label htmlFor='icon_prefix'>Ваша адреса електронної пошти</label>
                                <span
                                    className='helper-text'>На цю адресу буде відправлена відповідь служби підтримки</span>
                                <span className="helper-text">{this.state.formErrors.email}</span>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='input-field col s12'>
                                <i className='material-icons prefix'>mode_edit</i>
                                <textarea id='icon_prefix2' name='textArea' value={this.state.textArea} onChange={this.handleUserInput.bind(this)}
                                          className='materialize-textarea'/>
                                <label htmlFor='icon_prefix2'>Текст повідомлення</label>
                                <span className="helper-text">{this.state.formErrors.textArea}</span>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col s12'>
                                <label>
                                    <input name='checkPersonalData' onChange={this.handleUserInput.bind(this)} checked={this.state.checkPersonalData}
                                           type='checkbox'/>
                                    <span>Натискаючи кнопку «Відправити» ви даєте згоду на обробку своїх персональних даних</span>
                                </label>
                            </div>
                        </div>
                        <div className='row'>
                            <button className={`${this.state.formValid && 'disabled'} btn waves-effect waves-light disabled`} type='submit' name='submit'>Відправити
                                <i className='material-icons right'>send</i>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default Form;
