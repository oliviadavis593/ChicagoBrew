import React from 'react';

const BrewContext = React.createContext({
    brews: [],
    addBrew: () => {},
    deleteBrew: () => {}
})

export default BrewContext; 