import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './stylesheets/custom.scss';
import Home from './components/Home/Home.jsx';
import NaviBar from './components/Navbar/Navibar.jsx';

ReactDOM.render(
  <div>
    <Router>
      <NaviBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </Router>
  </div>,
  document.getElementById('root')
);