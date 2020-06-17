import React, { Component } from 'react';
import Navigation from '../components/Navigation';
import BrewItem from '../components/BrewItem';

class MyBrew extends Component {


    render() {
        return(
            <section>
                <div>
                    <Navigation />
                </div>
                <div>
                    <BrewItem />
                </div>
            </section>
        )
    }
}

export default MyBrew; 