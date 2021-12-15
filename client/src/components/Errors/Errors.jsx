import { useContext } from 'react';
import ErrorContext from '../Contexts/ErrorContext';
import ErrorPopup from './ErrorPopup';

const Errors = () => {
  const { errors } = useContext(ErrorContext);

  return(
    <div className="position-absolute bottom-0 ms-3">
      {errors.map((error, idx) => <ErrorPopup error={error} key={idx} />)}
    </div>
  )
};

export default Errors;