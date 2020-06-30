import React from 'react';

const BrewContext = React.createContext({
    brews: [],
    userBrews: [],
    addBrew: () => {},
    deleteBrew: () => {},
    updateBrew: () => {}
})

export default BrewContext; 