import React from 'react';

const BrewContext = React.createContext({
    brews: [],
    addBrew: () => {}
})

export default BrewContext; 