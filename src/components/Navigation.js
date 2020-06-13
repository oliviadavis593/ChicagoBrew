import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import '../styles/Navigation.css';


function Navigation() {
    return(
        <div className='cbt-navigation'>
            <div className='cbt-logo'>
                <Link to='/'>
                    <span>
                        Chicago Brew Tab
                    </span>
                </Link>
            </div>
            <nav className='nav'>       
                <NavLink to='/dashboard' className='cbt-link__home'>Home</NavLink>
                <NavLink to='/mybrew' className='cbt-link__mybrew'>My Brew</NavLink>
            </nav>
        </div>
    )
}

export default Navigation; 