import { useState } from "react";
import ListModal from '../ListModal/ListModal.jsx';

const NoLists = () => {
  const [show, setShow] = useState(false);
  const handleOpen = () => setShow(true);

  
  return(
    <div className="mt-3">
      <div>
        <h3>No To-Do's found!</h3>
        <input type="button" className="btn btn-primary w-25 p-2 text-white" value="Create a list now" 
          onClick={handleOpen} />
      </div>
      <ListModal show={show} setShow={setShow} handleOpen={handleOpen} />
    </div>
  );
};

export default NoLists;