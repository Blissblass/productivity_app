import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './stylesheets/custom.scss';
import Home from './components/Home/Home.jsx';
import NaviBar from './components/Navbar/Navibar.jsx';
import SignUp from './components/SignUp/SignUp';
import Login from './components/Login/Login';
import UserContext from './components/Contexts/UserContext';
import ProtectedRoute from './components/Routes/ProtectedRoute';
import AuthRoute from './components/Routes/AuthRoute';
import PrivateRoute from './components/Routes/PrivateRoute';
import { useState } from 'react';
import Profile from './components/Profile/Profile';

const App = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')))

  return(
  <div>
    <Router>
      <UserContext.Provider value={{user, setUser}}>
        <NaviBar />
        <Routes>
          <Route exact path="/" element={<ProtectedRoute element={<Home />} />} />
          <Route exact path="/login" element={<AuthRoute element={<Login />} />} />
          <Route exact path="/signUp" element={<AuthRoute element={<SignUp />} />} />
          <Route exact path="/user/:id" element={<PrivateRoute element={<Profile />} />} />
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