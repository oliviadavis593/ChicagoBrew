import React, { Component } from 'react';
import BrewItem from '../components/BrewItem';
import Footer from '../views/Footer';
import STORE from '../components/store';
import '../styles/BrewList.css';

class BrewList extends Component {
    render() {
        return(
            <section className='cbt-brew-list__container'>
                <ul className='cbt-brew_list'>
                  {STORE.brews.map(brew => (
                      <li key={brew.id}>
                          <BrewItem
                          id={brew.id}
                          name={brew.name}
                          image={brew.image}
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