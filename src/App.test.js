import React from 'react';
import ReactDOM from 'react-dom';
//import { Router } from 'react-router-dom';
import App from '../src/App.js';

it('renders without crashing', () => {
  const div = document.createElement('div')

  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div)
})