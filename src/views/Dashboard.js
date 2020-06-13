import React from 'react';
import BrewList from '../components/BrewList';
import Navigation from '../components/Navigation';

function Dashboard() {
    return(
        <div>
            <Navigation />
            <BrewList />
        </div>
    )
}

export default Dashboard; 