import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router';
import Home from './components/Home/Home.jsx';

ReactDOM.render(
  <React.StrictMode>
    <Home/>
  </React.StrictMode>,
  document.getElementById('root')
);