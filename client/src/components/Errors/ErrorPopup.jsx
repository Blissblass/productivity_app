import { useState } from "react";
import { Alert } from "react-bootstrap";

const ErrorPopup = (props) => {
  const [show, setShow] = useState(true);

  return(
    <Alert variant="danger" show={show} style={{width: 300}} onClose={() => setShow(false)} dismissible>
      {props.error}
    </Alert>
  )
};

export default ErrorPopup;