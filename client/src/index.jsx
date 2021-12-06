import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './stylesheets/custom.scss';
import Home from './components/Home/Home.jsx';
import NaviBar from './components/Navbar/Navibar.jsx';
import SignUp from './components/SignUp/SignUp';
import Login from './components/Login/Login';

const App = () => {

  return(
  <div>
    <Router>
      <NaviBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signUp" element={<SignUp />} />
      </Routes>
    </Router>
  </div>
  )
};

ReactDOM.render(
  <App />,
  document.getElementById('root')
);