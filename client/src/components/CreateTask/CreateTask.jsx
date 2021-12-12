import { BsJournalPlus } from 'react-icons/bs';

const CreateTask = () => {

  return(
    <div className="card mx-auto w-75 p-3">
      <div className=" d-flex  align-items-center justify-content-between">
        <h5 className="m-0">Add new task</h5>
        <div className="w-75">
          <form className="d-flex align-items-center justify-content-around">
            <input type="text" className="form-control form-control-lg w-75 ms-5" placeholder="Task..." required />
            <BsJournalPlus style={{fontSize: 40}} className="me-3 text-primary" />
          </form>
        </div>
      </div>
    </div>
  )
};

export default CreateTask;