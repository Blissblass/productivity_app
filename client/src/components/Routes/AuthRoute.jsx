import { Navigate } from "react-router";

const AuthRoute = (props) => {

  return(
    props.user? <Navigate to="/" /> : props.element
  )
};