import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './stylesheets/custom.scss';
import Home from './components/Home/Home.jsx';
import NaviBar from './components/Navbar/Navibar.jsx';
import SignUp from './components/SignUp/SignUp';
import Login from './components/Login/Login';
import UserContext from './components/Contexts/UserContext';
import ErrorContext from './components/Contexts/ErrorContext';
import ProtectedRoute from './components/Routes/ProtectedRoute';
import AuthRoute from './components/Routes/AuthRoute';
import PrivateRoute from './components/Routes/PrivateRoute';
import { useState } from 'react';
import Profile from './components/Profile/Profile';
import ToDo from './components/ToDo/ToDo';
import Errors from './components/Errors/Errors';

const App = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));
  const [errors, setErrors] = useState([]);

  return(
  <div>
    <Router>
      <UserContext.Provider value={{user, setUser}}>
        <ErrorContext.Provider value={{errors, setErrors}}>
          <NaviBar />
          <Errors />
          <Routes>
            <Route exact path="/" element={<ProtectedRoute element={<Home />} />} />
            <Route exact path="/login" element={<AuthRoute element={<Login />} />} />
            <Route exact path="/signUp" element={<AuthRoute element={<SignUp />} />} />
            <Route exact path="/user/:id" element={<PrivateRoute element={<Profile />} />} />
            <Route exact path="/user/:id/list/:list_id" element={<PrivateRoute element={<ToDo />} />} />  
          </Routes>
        </ErrorContext.Provider>
      </UserContext.Provider>
    </Router>
  </div>
  )
};

ReactDOM.render(
  <App />,
  document.getElementById('root')
);