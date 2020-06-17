import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Landing from '../views/Landing';
import Dashboard from '../views/Dashboard';
import BrewPage from '../components/BrewPage';
import MyBrew from '../components/MyBrew';
import BrewContext  from '../BrewContext';


class AppRouter extends Component {

    state = {
        brews: [],
    }

    handleAddBrew = brew => {
        console.log("brew", brew)
        this.setState({
            brews: [...this.state.brews, brew],
        })
    }

    render() {
        const contextValue = {
            brews: this.state.brews, 
            addBrew: this.handleAddBrew
        }
        return(
            <BrewContext.Provider value={contextValue}>
                <div className='App'>
                    <div className='Brew__landing'>
                        <Route exact path='/' component={Landing}/>
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
            </BrewContext.Provider>
        )
    }
}

export default AppRouter;