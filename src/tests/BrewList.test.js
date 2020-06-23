import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import BrewList from '../components/BrewList';


describe('BrewList component', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div')
        ReactDOM.render(<BrewList />, div)
        ReactDOM.unmountComponentAtNode(div)
    })

    it('renders the UI as expected', () => {
        const tree = renderer 
            .create(<BrewList />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    })
})