import { BsJournalPlus } from 'react-icons/bs';

const CreateTask = (props) => {

  const handleSubmit = (e) => {
    e.preventDefault();
    const inputVal = e.currentTarget[0].value;
    const data = {
      task: {
        description: inputVal,
        to_do_id: props.postId
      }
    }

    fetch('/task', {
      method: 'POST',      
      headers: new Headers({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }),
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(data => console.log(data));
  };

  return(
    <div className="mx-auto w-75 mb-4">
        <div >
          <form className="d-flex align-items-center justify-content-center" onSubmit={handleSubmit}>
            <input type="text" className="form-control form-control-lg w-75 me-3" placeholder="Add a new task..." required />
            <button type="submit" style={{backgroundColor: "transparent", border: "none"}}>
              <BsJournalPlus style={{fontSize: 37, cursor: "pointer"}} className="text-primary" />
            </button>
          </form>
        </div>
    </div>
  )
};

export default CreateTask;