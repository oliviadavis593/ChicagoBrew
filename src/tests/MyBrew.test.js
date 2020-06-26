import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import MyBrew from '../components/MyBrew';

const data = { params: {id: 2, name: 'test', }};

describe('MyBrew Component', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div')
        ReactDOM.render(<BrowserRouter><MyBrew match={{...data}} /></BrowserRouter>, div)
        ReactDOM.unmountComponentAtNode(div)
    })

    it('renders the UI as expected', () => {
        const tree = renderer 
            .create(<BrowserRouter><MyBrew match={ {...data } }/></BrowserRouter>)
            .toJSON()
        expect(tree).toMatchSnapshot();
    })
})