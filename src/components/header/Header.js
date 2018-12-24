import React, { Component } from 'react';
import nav from './nav-data';
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import './header.scss';

class Header extends Component{
    constructor(props) {
        super(props);
        this.state = {
            activeNav: 'Home'
        }
    }
    render() {
        const { location } = this.props;
        return(
            <header className='header-wrapper'>
                <div className='header-logo'></div>
                <ul className='header-link'>
                    {
                        nav.map(({path, label}) => (
                            <li className={`link-item ${ location.pathname === path ? 'active':''}`} key={path}>
                                <Link to={path}>{label}</Link>
                            </li>
                        ))
                    }
                </ul>
            </header>
        )
    }
}

export default withRouter(Header);
