import { BsJournalPlus } from 'react-icons/bs';

const CreateTask = () => {

  return(
    <div className="mx-auto w-75 p-2">
        <div >
          <form className="d-flex align-items-center justify-content-center">
            <input type="text" className="form-control form-control-lg w-75 me-3" placeholder="Add a new task..." required />
            <button style={{backgroundColor: "transparent", border: "none"}}><BsJournalPlus style={{fontSize: 37, cursor: "pointer"}} className="text-primary" /></button>
          </form>
        </div>
    </div>
  )
};

export default CreateTask;