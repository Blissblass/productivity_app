import { useState } from "react";

const Task = (props) => {
  const { task } = props;
  const [done, setDone] = useState(task.status);

  const handleComplete = () => {
    setDone(old => !old);
    fetch(`/api/toggle_status/${task.id}`);
  };

  return(
    <li className="list-group-item list-group-item-primary m-1" onDoubleClick={handleComplete}>
      { done ? 
        <h4 className="m-1"><del>{task.description}</del></h4>
      :
        <h4 className="m-1">{task.description}</h4>
      }
    </li>
  )
};

export default Task;