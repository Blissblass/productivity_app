import { useContext } from 'react';
import ErrorContext from '../Contexts/ErrorContext';

const Errors = () => {
  const { errors, setErrors } = useContext(ErrorContext);

  return(
    <div>
      <p>Errors</p>
    </div>
  )
};

export default Errors;