import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Landing from '../views/Landing';
import Login from '../components/Login';
import Registration from '../components/Registration';
import Dashboard from '../views/Dashboard';
import BrewPage from '../components/BrewPage';
import MyBrew from '../components/MyBrew';
import BrewContext  from '../BrewContext';
import Error from '../Error';
import config from '../config';


class AppRouter extends Component {

    state = {
        brews: [],
        user_brews: [], //dedicated to /mybrews for specific brews added to the list 
        error: null, 
    }

    componentDidMount() {
        fetch(`${config.API_ENDPOINT}/api/brews`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            }
        })
        .then(res => {
            if (!res.ok) {
                throw new Error(res.status)
            }
            return res.json()
        })
        .then(brews => {
            this.setState({ brews })
        })
        .catch(error => {
            console.error({ error })
        })
    }

    handleAddBrew = brew => {
        this.setState({
            user_brews: [...this.state.user_brews, brew],
        })
    }

    handleDeleteBrew = brew_id => {
        this.setState({
            user_brews: this.state.user_brews.filter(brew => brew.id !== brew_id)
        })
    }

    handleUpdateBrew = updatedBrew => {
        const newBrew = this.state.brews.map(i =>
            (i.id === updatedBrew.id)
                ? updatedBrew
                : i    
        )
        this.setState({
            brews: newBrew
        })
    }

    render() {
        const contextValue = {
            brews: this.state.brews, 
            userBrews: this.state.user_brews,
            addBrew: this.handleAddBrew,
            deleteBrew: this.handleDeleteBrew,
            updateItem: this.handleUpdateBrew
        }
        return(
            <BrewContext.Provider value={contextValue}>
                <Error>
                    <div className='App'>
                        <div className='Brew__landing'>
                            <Route exact path='/' component={Landing}/>
                            <Route path='/login' component={Login} />
                            <Route path='/registration' component={Registration} />
                        </div>

                        <main>
                        <Switch>
                                <Route path='/dashboard' component={Dashboard} />
                                {/*Note: change back to /brewpage/:brew_id when implenting backend API */}
                                <Route path='/brew/:brew_id' component={BrewPage} />
                                <Route path='/mybrews' component={MyBrew}/>
                        </Switch>
                        </main>
                    </div>
                </Error>
            </BrewContext.Provider>
        )
    }
}

export default AppRouter;