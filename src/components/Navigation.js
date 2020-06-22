import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../img/chicagobrew-logo.png';
import '../styles/Navigation.css';


function Navigation() {
    return(
        <div className='cbt-navigation'>
            <div className='cbt-logo'>
                <NavLink to='/'>
                    <img src={Logo} alt='cb-logo' className='cb-logo' />
                </NavLink>
            </div>
            <nav className='nav'>       
                <NavLink to='/dashboard' className='cbt-link__home'>Home</NavLink>
                <NavLink to='/mybrews' className='cbt-link__mybrew'>My Brew</NavLink>
            </nav>
        </div>
    )
}

export default Navigation; 