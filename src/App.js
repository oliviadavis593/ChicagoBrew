import React from 'react';
import AppRouter from './routers/AppRouter';
import { BrowserRouter } from 'react-router-dom';
import './App.css';

function App() {
  return (
   <BrowserRouter>
     <AppRouter />
   </BrowserRouter>
  );
}

export default App;
