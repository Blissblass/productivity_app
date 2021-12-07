import UserContext from '../Contexts/UserContext';
import { useContext } from 'react';
import { Navigate } from "react-router";

const ProtectedRoute = (props) => {
  const { user } = useContext(UserContext);

  return(
    user ? props.element : <Navigate to="/login "/>
  )
};

export default ProtectedRoute;