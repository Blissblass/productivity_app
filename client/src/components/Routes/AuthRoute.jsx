import UserContext from '../Contexts/UserContext';
import { useContext } from 'react';
import { Navigate } from "react-router";

const AuthRoute = (props) => {
  const { user } = useContext(UserContext);

  return(
    user ? <Navigate to="/" /> : props.element
  )
};

export default AuthRoute;