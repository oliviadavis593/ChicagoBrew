import React, { Component } from 'react';
import Navigation from '../components/Navigation';
import BrewItem from '../components/BrewItem';
import BrewContext from '../BrewContext';
import config from '../config';
import '../styles/MyBrew.css';

class MyBrew extends Component {

    static contextType = BrewContext;
    
    handleClickDelete = e => {
        const brew_id = this.props.brew_id

        fetch(`${config.API_ENDPOINT}/api/brews/${brew_id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            }
        })
        .then(res => {
            if (!res.ok) {
                throw new Error(res.status)
            }
        })
        .then(() => {
            this.context.deleteBrew(brew_id)
        })
        .catch(error => {
            console.error({ error })
        })
    }

    render() {
        //uses context to retrieve the brews located in state in AppRouter 
        const brews = this.context.brews; 
        return(
            <div>
                <div className='navigation'>
                    <Navigation />
                </div>
                <ul className='cbt-mybrew-list'>
                    {brews.map(brew => (
                        <li key={brew.id}>
                            <BrewItem 
                                id={brew.id}
                                name={brew.name}
                            />
                        <div className='cbt-delete__container'>
                            <button
                                className='cbt-delete'
                                type='button'
                                onClick={() => this.handleClickDelete()}
                            >   
                                {' '}
                                Delete
                            </button>
                        </div>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default MyBrew; 