import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import BrewItem from '../components/BrewItem';

describe('BrewItem component', () => {
    it (`renders without crashing`, () => {
        const div = document.createElement('div')
        ReactDOM.render(<BrewItem name='test-name'/>, div)
        ReactDOM.unmountComponentAtNode(div)
    })

    it('renders the UI as expected', () => {
        const tree = renderer
            .create(<BrewItem  name='test-name'/>)
            .toJSON();
        expect(tree).toMatchSnapshot();
        })
})