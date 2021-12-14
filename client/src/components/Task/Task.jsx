import { useState } from "react";
import { Draggable } from 'react-beautiful-dnd';


const Task = (props) => {
  const { task, idx } = props;
  const [done, setDone] = useState(task.status);

  const handleComplete = () => {
    setDone(old => !old);
    fetch(`/api/toggle_status/${task.id}`);
  };

  return(
    <Draggable key={task.id} draggableId={`${task.id}`} index={idx}>
      {provided => (
        <div {...provided.dragHandleProps} {...provided.draggableProps} ref={provided.innerRef}>
          <li className="list-group-item list-group-item-primary m-1" onClick={handleComplete}>
            { done ? 
              <h4 className="m-1"><del>{task.description}</del></h4>
            :
              <h4 className="m-1">{task.description}</h4>
            }
          </li>
        </div>
      )}
    </Draggable>
  )
};

export default Task;