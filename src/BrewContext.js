import React from 'react';

const BrewContext = React.createContext({
    brews: [],
    userBrews: [],
    addBrew: () => {},
    deleteBrew: () => {}
})

export default BrewContext; 