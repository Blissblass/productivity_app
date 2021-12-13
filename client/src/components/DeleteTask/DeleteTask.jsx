import { BsTrash } from 'react-icons/bs';

const DeleteTask = () => {

  return(
    <div className="position-fixed bg-danger p-4 rounded" style={{right:40, bottom:40}}>
      <BsTrash className="text-white m-2" style={{fontSize:45}} />
    </div>
  )
};

export default DeleteTask;