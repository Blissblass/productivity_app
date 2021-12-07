import { Navigate, useParams } from "react-router";
import UserContext from '../Contexts/UserContext';
import { useContext } from 'react';

const PrivateRoute = (props) => {
  const { user } = useContext(UserContext);
  const params = useParams();

  return(
    user.id === parseInt(params.id) ? props.element : <Navigate to="/" />
  )
};

export default PrivateRoute;