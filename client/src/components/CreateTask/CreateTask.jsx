
const CreateTask = () => {

  return(
    <div className="card mx-auto w-75 p-3">
      <div className=" d-flex  align-items-center justify-content-between">
        <h5 className="mt-2">Add new task</h5>
        <div className="w-75">
          <input type="text" className="form-control form-control-lg w-75" placeholder="Task..." />
        </div>
      </div>
    </div>
  )
};

export default CreateTask;