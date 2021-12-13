import Task from '../Task/Task';
import { Droppable } from 'react-beautiful-dnd';
import { Draggable } from 'react-beautiful-dnd';

const TaskList = (props) => {
  const { taskData } = props;

  return(
    <Droppable droppableId={props.listId}>
      {provided => (
        <div {...provided.droppableProps} ref={provided.innerRef}>
          <ul className="list-group list-group-flush text-start w-50 mx-auto">
            { taskData.map((taskItem, idx) => (
              <Draggable key={taskItem.id} draggableId={`${taskItem.id}`} index={idx}>
                {provided => (
                  <div {...provided.dragHandleProps} {...provided.draggableProps} ref={provided.innerRef}>
                    <Task key={taskItem.id} task={taskItem} /> 
                  </div>
                )}
              </Draggable>
            ))}
          </ul>
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  )
};

export default TaskList;