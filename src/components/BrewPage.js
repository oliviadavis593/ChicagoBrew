import React, { Component } from 'react';
import STORE from '../components/store';


class BrewPage extends Component {

    render() {

        const { brew_id } = this.props.match.params; 
        const brew = STORE.brews.find(brew => brew.id === brew_id);

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
                    {brew.website}
                </div>
                <details closed>
                    {brew.details}
                </details>
             </div>
         </section>   
        )
    }
}

export default BrewPage; 