import React, { Component } from 'react';
import STORE from '../components/store';


class BrewPage extends Component {

    render() {

        const { brew_id } = this.props.match.params; 
        const brew = STORE.brews.find(brew => brew.id === parseInt(brew_id, 10));
        console.log("brew_id", brew_id);
        console.log("brew", brew);
        return(
         <section className='cbt-brew-page__container'>
             <header>
               <h1>{brew.name}</h1>
             </header>
             <div className='cbt-item-info__container'>
                <div className='cbt-item_phone-number'>
                    {brew.phone_number}
                </div>
                <div className='cbt-item_website'>
                    <a href={brew.website} target='blank'>{brew.website}</a>
                </div>
                <details closed='true'>
                    {brew.details}
                </details>
             </div>
         </section>   
        )
    }
}

export default BrewPage; 