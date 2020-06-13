import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../views/Footer';
import '../styles/Landing.css';


function Landing() {
    return(
        <div>
            <header>
                <h1>Logo Here</h1>
            </header>
            <div className='landing-main'>
                <p>
                    There's over 167 breweries in the Chicago Area. Chicago
                    Brew Tab allows you to find your favorite breweries and 
                    drink your way through town.
                </p>
            </div>
            <div className='landing-start'>
                  <h2>How to get started...</h2>
                  <p>1. Simply view the Chicago brewery list.</p>
                  <p>2. Choose an individual brewery to see the information listed.</p>
                  <p>3. Visit a brewery and enjoy!</p>  
            </div>
            <div className='landing-btn'>
               <Link to='/dashboard' className='enter_button'>
                    <button>Enter</button>
               </Link>
            </div>
            <div className='footer'>
                <Footer />
            </div>
        </div>
    )
}

export default Landing; 