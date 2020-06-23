import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import MyBrew from '../components/MyBrew';

describe('MyBrew Component', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div')
        ReactDOM.render(<MyBrew />, div)
        ReactDOM.unmountComponentAtNode(div)
    })

    it('renders the UI as expected', () => {
        const tree = renderer 
            .create(<MyBrew id={2} name='test name'/>)
            .toJSON()
            .expect(tree).toMatchSnapshot();
    })
})