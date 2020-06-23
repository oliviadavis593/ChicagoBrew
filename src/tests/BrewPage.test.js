import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import BrewPage from '../components/BrewPage';

describe('BrewPage component', () => {
    it('render without crashing', () => {
        const div = document.createElement('div')
        ReactDOM.render(<BrewPage />, div)
        ReactDOM.unmountComponentAtNode(div)
    })

    it('renders the UI as expected', () => {
        const tree = renderer 
            .create(<BrewPage />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    })
})