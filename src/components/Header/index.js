import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'

import './style.css'

class Header extends Component {

    render() {
        return (
            <header>
                <nav className="nav-extended">
                    <div className="nav-wrapper"><a className="brand-logo" href="/">Pharm Comunnity</a><a
                        className="sidenav-trigger" href="" data-target="slide-out"><i
                        className="material-icons">menu</i></a>
                        <ul className="right hide-on-med-and-down">
                            <li><a className="waves-effect waves-light btn red lighten-2" href=""><i
                                className="material-icons left">description</i>Як користуватись?</a></li>
                            <li><a href="">База матеріалів<i className="material-icons right">school</i></a></li>
                            <li><a className="sidenav-trigger trigger-my-profile" href="" data-target="slide-out">Мій
                                профіль<i className="material-icons right">assignment_ind</i></a></li>
                            <li><a href="">Вийти<i className="material-icons right">exit_to_app</i></a></li>
                        </ul>
                    </div>
                    <div className="nav-content">
                        <ul className="tabs tabs-transparent sub-nav no-autoinit">
                            <li className="tab">
                                <NavLink to='/' activeClassName="active" exact >Головна</NavLink>
                            </li>
                            <li className="tab">
                                <NavLink to='/calendarTimeline' activeClassName="active" exact >Календар</NavLink>
                            </li>
                            <li className="tab">
                                <NavLink to='/save' activeClassName="active" exact >Збережені матеріали</NavLink>
                            </li>
                            <li className="tab">
                                <NavLink to='/supports' activeClassName="active" exact >Підтримка</NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>
                <ul className="sidenav" id="slide-out">
                    <li>
                        <div className="user-view">
                            <div className="background">
                                <img src="assets/img/1.jpg"/>
                            </div>
                            <a href=""><img className="circle" src="assets/img/yuna.jpg"/></a><a href="name"><span
                            className="white-text name">John Doe</span></a><a href="email"><span
                            className="white-text email">jdandturk@gmail.com</span></a>
                        </div>
                    </li>
                    <li><a href=""><i className="material-icons">cloud</i>First Link With Icon</a></li>
                    <li><a href="">Second Link</a></li>
                    <li>
                        <div className="divider"></div>
                    </li>
                    <li><a className="subheader">Subheader</a></li>
                    <li><a className="waves-effect" href="">Third Link With Waves</a></li>
                </ul>
                <ul className="sidenav" id="mobile-demo">
                    <li><a href="">Sass</a></li>
                    <li><a href="">Components</a></li>
                    <li><a href="">Javascript</a></li>
                    <li><a href="">Mobile</a></li>
                </ul>
            </header>
        )
    }

}

export default Header
