import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navigation.css'


function Navigation() {
    return(
        <nav className='nav'>
            <NavLink to='/dashboard' className='cbt-link__home'>Home</NavLink>
            <NavLink to='/mybrew' className='cbt-link__mybrew'>My Brew</NavLink>
        </nav>
    )
}

export default Navigation; 