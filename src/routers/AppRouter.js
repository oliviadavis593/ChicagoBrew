import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Landing from '../views/Landing';
import Dashboard from '../views/Dashboard';
import BrewPage from '../components/BrewPage';


class AppRouter extends Component {
    render() {
        return(
                <div className='App'>
                <div className='Brew__landing'>
                    <Route exact path='/' component={Landing}/>
                </div>

                <main>
                    <Switch>
                        <Route path='/dashboard' component={Dashboard} />
                        {/*Note: change back to /brewpage/:brew_id when implenting backend API */}
                        <Route path='/brews/:brew_id' component={BrewPage} />
                    </Switch>
                </main>
            </div>
        )
    }
}

export default AppRouter;