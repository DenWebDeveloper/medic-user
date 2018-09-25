import React, {Component} from 'react';
import axios from '../../helpers/axios'

import Header from '../Header';
import Footer from '../Footer';

import Select from 'react-select';

import SimpleReactValidator from 'simple-react-validator';

import './style.css'

const validatorOptions = {
    confirmPassword: {
        message: 'Паролі не співпадають',
        rule: function (val, options) {
            return val === options[0]
        }
    },
    textUA: {
        message: 'Довзволені лише такі символи А-Я',
        rule: function (val, options) {
            return this._testRegex(val, /^[А-Яа-яІіЇїЄєҐґ]+$/i)
        }
    }
};

class Registration extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            email: '',
            password: '',
            confirmPassword: '',
            name: '',
            surname: '',
            secondName: '',
            selectedRegion: '',
            selectedCity: '',
            selectedNetwork: '',
            selectedPharmacy: '',
            regions: [],
            cities: [],
            networks: [],
            errors: [],
        };

        this.validator = new SimpleReactValidator(validatorOptions);

        this.handleInputChange = this.handleInputChange.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }

    render() {
        return (
            <div className='login-page'>
                <Header/>
                <div className='container'>
                    <div className='row'>
                        <div className='col s12 m6 offset-m3'>
                            <h3>Регестрація</h3>
                        </div>
                        <form className='col s12 m6 offset-m3'>

                            <div className='row'>
                                <div className='input-field col s12'>
                                    <i className='material-icons prefix'>email</i>
                                    <input id='email' name='email' type='text' value={this.state.email}
                                           onChange={this.handleInputChange}/>
                                    <label htmlFor='email'>Email</label>
                                    <span className='helper-text'>
                                        {this.validator.message('email', this.state.email, 'required|email', 'red-text', {
                                            default: 'Некоректні дані'
                                        })}
                                    </span>
                                </div>
                            </div>

                            <div className='row'>
                                <div className="input-field col s12">
                                    <i className='material-icons prefix'>verified_user</i>
                                    <input id='password' name='password' type='password' value={this.state.password}
                                           onChange={this.handleInputChange}/>
                                    <label htmlFor='password'>Пароль</label>
                                    <span className='helper-text'>
                                        {this.validator.message('password', this.state.password, 'required|min:6|max:20', 'red-text', {
                                            min: 'Мінімальна кількість символів 6',
                                            max: 'Mаксимальна кількість символів 20',
                                            default: 'Некоректні дані'
                                        })}
                                    </span>
                                </div>
                            </div>

                            <div className='row'>
                                <div className={`input-field col s12`}>
                                    <i className='material-icons prefix'>verified_user</i>
                                    <input id='confirmPassword' name='confirmPassword' type='password'
                                           value={this.state.confirmPassword}
                                           onChange={this.handleInputChange}/>
                                    <label htmlFor='confirmPassword'>Підтвердіть пароль</label>
                                    <span className='helper-text red-text'>
                                        {this.validator.message('confirmPassword', this.state.confirmPassword, `required|min:6|max:20|confirmPassword:${this.state.password}`, 'red-text', {
                                            min: 'Мінімальна кількість символів 6',
                                            max: 'Mаксимальна кількість символів 20',
                                        })}
                                    </span>
                                </div>
                            </div>

                            <div className='row'>
                                <div className={`input-field col s12`}>
                                    <i className='material-icons prefix'>assignment_ind</i>
                                    <input id='name' name='name' type='text' value={this.state.name}
                                           onChange={this.handleInputChange}/>
                                    <label htmlFor='name'>Ім'я</label>
                                    <span className='helper-text'>
                                        {this.validator.message('name', this.state.name, 'textUA|required|min:1|max:20', 'red-text', {
                                            min: 'Мінімальна кількість символів 1',
                                            max: 'Mаксимальна кількість символів 20',
                                            default: 'Некоректні дані'
                                        })}
                                    </span>
                                </div>
                            </div>

                            <div className='row'>
                                <div className='input-field col s12'>
                                    <i className='material-icons prefix'>assignment_ind</i>
                                    <input id='surname' name='surname' type='text' value={this.state.surname}
                                           onChange={this.handleInputChange}/>
                                    <label htmlFor='surname'>По-батькові</label>
                                    <span className='helper-text'>
                                        {this.validator.message('surname', this.state.surname, 'textUA|required|min:1|max:20', 'red-text', {
                                            min: 'Мінімальна кількість символів 1',
                                            max: 'Mаксимальна кількість символів 20',
                                            default: 'Некоректні дані'
                                        })}
                                    </span>
                                </div>
                            </div>

                            <div className='row'>
                                <div className='input-field col s12'>
                                    <i className='material-icons prefix'>assignment_ind</i>
                                    <input id='secondName' name='secondName' type='text' value={this.state.secondName}
                                           onChange={this.handleInputChange}/>
                                    <label htmlFor='secondName'>Прізвище</label>
                                    <span className='helper-text'>
                                        {this.validator.message('secondName', this.state.secondName, 'textUA|required|min:1|max:20', 'red-text', {
                                            min: 'Мінімальна кількість символів 1',
                                            max: 'Mаксимальна кількість символів 20',
                                            default: 'Некоректні дані'
                                        })}
                                    </span>
                                </div>
                            </div>

                            <div className='row'>
                                <div className='input-field col s12'>
                                    <i className='material-icons prefix'>location_on</i>
                                    <Select
                                        classNamePrefix='search-select'
                                        placeholder='Виберіть регіон'
                                        isClearable
                                        isSearchable
                                        closeMenuOnScroll
                                        name='region'
                                        onChange={this.handleChangeSelectRegion}
                                        options={this.state.regions}
                                    />
                                </div>
                                {this.validator.message('region', this.state.selectedRegion, 'required|integer', 'red-text', {
                                    default: 'Виберіть регіон'
                                })}
                            </div>

                            {this.state.selectedRegion &&
                            <div className='row'>
                                <div className='input-field col s12'>
                                    <i className='material-icons prefix'>location_city</i>
                                    <Select
                                        classNamePrefix='search-select'
                                        placeholder='Виберіть місто'
                                        isClearable
                                        isSearchable
                                        closeMenuOnScroll
                                        name='city'
                                        onChange={this.handleChangeSelectCity}
                                        options={this.state.cities}
                                    />
                                </div>
                                {this.validator.message('city', this.state.selectedCity, 'required|integer', 'red-text', {
                                    default: 'Виберіть місто'
                                })}
                            </div>
                            }

                            {this.state.selectedCity &&
                            <div className='row'>
                                <div className='input-field col s12'>
                                    <i className='material-icons prefix'>my_location</i>
                                    <Select
                                        classNamePrefix='search-select'
                                        placeholder='Виберіть мережу до якої відноситься аптека'
                                        isClearable
                                        isSearchable
                                        closeMenuOnScroll
                                        name='pharmacyNetwork'
                                        onChange={this.handleChangeSelectNetworks}
                                        options={this.state.networks}
                                    />
                                </div>
                                {this.validator.message('city', this.state.selectedNetwork, 'required|integer', 'red-text', {
                                    default: 'Виберіть мережу'
                                })}
                            </div>
                            }

                            {this.state.selectedNetwork &&
                            <div className='row'>
                                <div className='input-field col s12'>
                                    <i className='material-icons prefix'>local_pharmacy</i>
                                    <Select
                                        classNamePrefix='search-select'
                                        placeholder='Виберіть аптеку'
                                        isClearable
                                        isSearchable
                                        closeMenuOnScroll
                                        name='pharmacyNetwork'
                                        onChange={this.handleChangeSelectPharmacy}
                                        options={this.state.pharmacies}
                                    />
                                </div>
                                {this.validator.message('pharmacy', this.state.selectedPharmacy, 'required|integer', 'red-text', {
                                    default: 'Виберіть аптеку'
                                })}
                            </div>
                            }

                            <div className='row'>
                                <div className='col s12 red-text'>{this.state.errors}</div>
                            </div>
                            <div className='row'>
                                <div className='col s12'>
                                    <button
                                        onClick={this.submitForm}
                                        disabled={this.state.loading}
                                        className={`btn waves-effect waves-light`} type='submit'
                                        name='action'>
                                        Submit
                                        {this.state.loading &&
                                        <i className="material-icons right animation-rotate">hourglass_empty </i>}
                                        {!this.state.loading && <i className='material-icons right'>send</i>}
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

    handleChangeSelectRegion = (selectedOption) => {
        if (selectedOption) {
            this.setState(() => (
                {selectedRegion: selectedOption.value}
            ), () => {
                this.loadOptionsCity()
            });
        } else {
            this.setState(() => (
                {selectedRegion: null}
            ));
        }
        this.setState(() => ({
            selectedCity: null,
            cities: []
        }));
    };

    handleChangeSelectCity = (selectedOption) => {
        if (selectedOption) {
            this.setState(() => (
                {selectedCity: selectedOption.value}
            ), () => {
                this.loadOptionsNetworks()
            });
        } else {
            this.setState(() => (
                {selectedCity: null}
            ));
        }
    };

    handleChangeSelectNetworks = (selectedOption) => {
        if (selectedOption) {
            this.setState(() => (
                {selectedNetwork: selectedOption.value}
            ), () => {
                this.loadOptionsPharmacies()
            });
        } else {
            this.setState(() => (
                {selectedNetwork: null}
            ));
        }
    };

    handleChangeSelectPharmacy = (selectedOption) => {
        if (selectedOption) {
            this.setState(() => (
                {selectedPharmacy: selectedOption.value}
            ));
        } else {
            this.setState(() => (
                {selectedPharmacy: null}
            ));
        }
    };

    loadOptionsRegion() {
        axios.get('/region').then(res => {
            const regions = res.data.map(item => {
                return {value: item.id, label: item.name}
            });
            this.setState(() => ({
                regions,
            }))
        }).catch(error => {
            this.setState((prevState) => {
                const errors = prevState.errors;
                errors.push(error.message);
                return {
                    errors
                }
            });
            console.error(error);
        })
    }

    loadOptionsCity() {
        const region = this.state.selectedRegion;
        axios.get(`/${region}/city`).then(res => {
            const cities = res.data.map(item => {
                return {value: item.id, label: item.name}
            });
            this.setState(() => ({
                cities,
            }))
        }).catch(error => {
            this.setState((prevState) => {
                const errors = prevState.errors;
                errors.push(error.message);
                return {
                    errors
                }
            });
            console.error(error);
        })
    }

    loadOptionsNetworks() {
        const region = this.state.selectedRegion;
        const city = this.state.selectedCity;
        axios.get(`/${region}/${city}/pharmacyNetworks`).then(res => {
            const networks = res.data.map(item => {
                return {value: item.networkId, label: item.networkName}
            });
            this.setState(() => ({
                networks,
            }))
        }).catch(error => {
            this.setState((prevState) => {
                const errors = prevState.errors;
                errors.push(error.message);
                return {
                    errors
                }
            });
            console.error(error);
        })
    }

    loadOptionsPharmacies() {
        const region = this.state.selectedRegion;
        const network = this.state.selectedNetwork;
        const city = this.state.selectedCity;
        axios.get(`/${region}/${city}/${network}/pharmacy`).then(res => {
            const pharmacies = res.data.map(item => {
                return {value: item.id, label: item.name}
            });
            this.setState(() => ({
                pharmacies,
            }))
        }).catch(error => {
            this.setState((prevState) => {
                const errors = prevState.errors;
                errors.push(error.message);
                return {
                    errors
                }
            });
            console.error(error);
        })
    }

    submitForm(e) {
        e.preventDefault();
        if (this.validator.allValid()) {
            this.registration();
        } else {
            this.validator.showMessages();
            // rerender to show messages for the first time
            this.forceUpdate();
        }
    }

    registration() {
        const {email, password, confirmPassword, name, surname, secondName, selectedRegion, selectedCity, selectedNetwork, selectedPharmacy} = this.state;
        this.setState(() => ({
            loading: true
        }));
        axios.post('/registration', {
            email,
            password,
            confirmPassword,
            name,
            surname,
            secondName,
            selectedRegion,
            selectedCity,
            selectedNetwork,
            selectedPharmacy
        }).then((res) => {
            console.log(res); //TODO  this.push('/login',{registrationSuccess: true}) і там показуємо повідомлення
            this.setState(() => ({
                loading: false
            }));
        }).catch(error => {
            this.setState((prevState) => {
                const errors = prevState.errors;
                errors.push(error.message);
                return {
                    loading: false,
                    errors
                }
            });
        })
    }

    componentDidMount() {
        this.loadOptionsRegion()
    }
}

export default Registration;
