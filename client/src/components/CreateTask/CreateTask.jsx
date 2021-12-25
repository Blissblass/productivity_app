import { useState } from 'react';
import { BsJournalPlus } from 'react-icons/bs';

const CreateTask = (props) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      task: {
        description: input,
        to_do_id: props.postId
      }
    }

    fetch('https://taskio-backend.herokuapp.com/task', {
      method: 'POST',      
      headers: new Headers({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }),
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(data => {
        props.setTaskData(oldArr => [...oldArr, data]);
        setInput("");
      });
  };

  return(
    <div className="mx-auto w-75 mb-4">
        <div >
          <form className="d-flex align-items-center justify-content-center" onSubmit={handleSubmit}>
            <input type="text" className="form-control form-control-lg w-75 me-3" placeholder="Add a new task..." required 
              onChange={e => setInput(e.target.value)} value={input} />
            <button type="submit" style={{backgroundColor: "transparent", border: "none"}}>
              <BsJournalPlus style={{fontSize: 37, cursor: "pointer"}} className="text-primary" />
            </button>
          </form>
        </div>
    </div>
  )
};

export default CreateTask;