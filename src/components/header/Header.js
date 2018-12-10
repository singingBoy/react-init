import React, { Component } from 'react';
import nav from './nav-data';
import { Link } from "react-router-dom";
import './header.scss';

export default class Header extends Component{
    constructor(props) {
        super(props);
        this.state = {
            activeNav: 'Home'
        }
    }
    render() {
        const { activeNav } = this.state;
        return(
            <header className='header-wrapper'>
                <div className='header-logo'></div>
                <ul className='header-link'>
                    {
                        nav.map(({path, label}) => (
                            <li className={`link-item ${ activeNav === label ? 'active':''}`} key={path}>
                                <Link to={path}>{label}</Link>
                            </li>
                        ))
                    }
                </ul>
            </header>
        )
    }
}