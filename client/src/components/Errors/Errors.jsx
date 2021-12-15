import { useContext } from 'react';
import ErrorContext from '../Contexts/ErrorContext';

const Errors = () => {
  const { errors, setErrors } = useContext(ErrorContext);

  return(
    <div>
      <p>Errors</p>
      {errors.map(error => <p>{error}</p>)}
    </div>
  )
};

export default Errors;