import React, { Component } from 'react';
import Navigation from '../components/Navigation';
import BrewItem from '../components/BrewItem';
import BrewContext from '../BrewContext';
import config from '../config';
import '../styles/MyBrew.css';

class MyBrew extends Component {

    static contextType = BrewContext;
    
    //DELETE a specific brew by id inside /mybrews list 
    handleClickDelete = e => {
       const userBrews = this.context.userBrews;

        fetch(`${config.API_ENDPOINT}/api/brews/${brewId}`, {
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
            this.context.deleteBrew(brewId)
        })
        .catch(error => {
            console.error({ error })
        })
    }

    render() {
        //uses context to retrieve the brews located in state in AppRouter 
        const userBrews = this.context.userBrews; 
        return(
            <div>
                <div className='navigation'>
                    <Navigation />
                </div>
                <ul className='cbt-mybrew-list'>
                    {userBrews.map(userBrews => (
                        <li key={userBrews.id}>
                            <BrewItem 
                                id={userBrews.id}
                                name={userBrews.name}
                            />
                        <div className='cbt-delete__container'>
                            <button
                                className='cbt-delete'
                                type='button'
                                onClick={() => this.handleClickDelete = brewId}
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