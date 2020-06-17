import React, { Component } from 'react';
import Navigation from '../components/Navigation';
import BrewItem from '../components/BrewItem';
import BrewContext from '../BrewContext';

class MyBrew extends Component {

    static contextType = BrewContext; 

    render() {
        const brews = this.context.brews; 
        return(
            <div>
                <div>
                    <Navigation />
                </div>
                <section>
                    <ul>
                        {brews.map(brew => (
                           <li key={brew.id}>
                            <BrewItem 
                                id={brew.id}
                                name={brew.name}
                                image={brew.image}
                            />
                           </li>
                        ))}
                    </ul>
                </section>
            </div>
        )
    }
}

export default MyBrew; 