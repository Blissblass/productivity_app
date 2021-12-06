import { Navigate } from "react-router";

const ProtectedRoute = (props) => {

  return(
    props.user? props.element : <Navigate to="/login "/>
  )
};

export default ProtectedRoute;