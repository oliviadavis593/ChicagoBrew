import React, { Component } from 'react';
import Navigation from '../components/Navigation';
import BrewContext from '../BrewContext';

class MyBrew extends Component {

    static contextType = BrewContext; 

    render() {
        return(
            <section>
                <div>
                    <Navigation />
                </div>
                <div className='brew-list'>
                    
                </div>
            </section>
        )
    }
}

export default MyBrew; 