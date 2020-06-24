import React, { Component } from 'react';
import BrewItem from '../components/BrewItem';
import Footer from '../views/Footer';
import BrewContext from '../BrewContext';
import '../styles/BrewList.css';

class BrewList extends Component {

    static contextType = BrewContext; 

    render() {
        //passed down list of brews from state via context 
        const brews = this.context.brews; 
        return(
            <section className='cbt-brew-list__container'>
                <ul className='cbt-brew_list'>
                    {/*Map through the brews array to get the entire list of breweries */}
                  {brews.map(brew => (
                      <li key={brew.id}>
                          <BrewItem
                          id={brew.id}
                          name={brew.name}
                          />
                      </li>
                  ))}
                </ul>
                <div className='footer'>
                    <Footer />
                </div>
            </section>
        )
    }
}

export default BrewList; 