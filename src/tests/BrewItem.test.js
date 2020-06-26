import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import BrewItem from '../components/BrewItem';

describe('BrewItem component', () => {
    it (`renders without crashing`, () => {
        const div = document.createElement('div')
        ReactDOM.render(<BrowserRouter><BrewItem name='test-name'/></BrowserRouter>, div)
        ReactDOM.unmountComponentAtNode(div)
    })

    it('renders the UI as expected', () => {
        const tree = renderer
            .create(<BrowserRouter><BrewItem  name='test-name'/></BrowserRouter>)
            .toJSON();
        expect(tree).toMatchSnapshot();
        })
})