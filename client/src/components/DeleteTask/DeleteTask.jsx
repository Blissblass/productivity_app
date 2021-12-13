import { BsTrash } from 'react-icons/bs';
import { Droppable } from 'react-beautiful-dnd';

const DeleteTask = () => {

  return(
    <Droppable droppableId="drop-delete">
      {provided => (
        <div className="position-fixed bg-danger rounded" style={{right:40, bottom:40, height: 100, width: 100}} 
            {...provided.droppableProps} ref={provided.innerRef}>
          <BsTrash className="text-white mt-4" style={{fontSize:45}} />
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  )
};

export default DeleteTask;