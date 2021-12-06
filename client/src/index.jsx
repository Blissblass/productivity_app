import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './stylesheets/custom.scss';
import Home from './components/Home/Home.jsx';
import NaviBar from './components/Navbar/Navibar.jsx';
import SignUp from './components/SignUp/SignUp';
import Login from './components/Login/Login';
import UserContext from './components/Contexts/UserContext';
import { useEffect, useState } from 'react';

const App = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')))

  return(
  <div>
    <Router>
      <UserContext.Provider value={{user, setUser}}>
        <NaviBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signUp" element={<SignUp />} />
        </Routes>
      </UserContext.Provider>
    </Router>
  </div>
  )
};

ReactDOM.render(
  <App />,
  document.getElementById('root')
);