import React from 'react';
import '../styles/Footer.css'


function Footer() {
    return(
        <footer className='footer'>
            <div className='footer__brand-container'>
                <span role='img'>
                    Made with <span role='img' aria-label='heart-emoji'>❤️</span> by <a href='https://oliviadavis593.github.io/portfolio/' target='_blank' rel='noopener noreferrer'>Olivia Davis</a>
                </span>
            </div>
                <div className='copyright-text'>
                    <p>
                        Copyright &copy; 2020
                    <br />
                        All Rights Reserved
                    </p>
                </div>
            </footer>
    )
}


export default Footer; 