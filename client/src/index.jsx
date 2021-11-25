import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home.jsx';

ReactDOM.render(
  <Router>
    <Routes>
      <Route exact path="/" element={<Home />} />
    </Routes>
  </Router>,
  document.getElementById('root')
);