import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import BrewPage from '../components/BrewPage';


const data = {params: {name: 'test', phone_number: 'ddd', address: 'test', details: 'test', website: 'sss'}};

describe('BrewPage component', () => {
    it('render without crashing', () => {
        const div = document.createElement('div')
        ReactDOM.render(<BrowserRouter><BrewPage match={ {...data}}/></BrowserRouter>, div)
        ReactDOM.unmountComponentAtNode(div)
    })
    
    it('renders the UI as expected', () => {
        const tree = renderer 
            .create(<BrowserRouter><BrewPage match={ {...data} }/></BrowserRouter>)
            .toJSON();
        expect(tree).toMatchSnapshot();
    })

})