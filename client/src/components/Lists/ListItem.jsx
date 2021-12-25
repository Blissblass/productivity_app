import { useState } from 'react';
import { BsPencilSquare } from 'react-icons/bs';
import { CgTrashEmpty } from 'react-icons/cg';
import { AiOutlineCheck } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { BsJournal } from 'react-icons/bs';

const ListItem = (props) => {
  const { item, setUserLists } = props;
  const [editing, setEditing] = useState(false);
  const [editData, setEditData] = useState(item.name);

  const handleDelete = () => {
    fetch(`https://taskio-backend.herokuapp.com/to_do/${item.id}`, {
      method: 'DELETE'
    })
      .then(setUserLists(old => old.filter(listItem => listItem.id !== item.id )))
  };

  const handleEdit = () => {
    if(editData === item.name || !editData.length) {
      setEditing(false);
      return
    }

    const data = {
      to_do: {
        name: editData
      }
    }

    fetch(`https://taskio-backend.herokuapp.com/to_do/${item.id}`, {
      method: 'PATCH',     
      headers: new Headers({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }),
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(data => {
        if(data.id) {
          item.name = data.name;
          setEditing(false);
        } else {
          // handle errors
        }
      });
  };

  const handleToggle = () => setEditing(old => !old);

  return(
    <div className="mt-3">
      <div className="card w-50 mx-auto">
        <div className="d-flex justify-content-between align-items-center">
          <div className="ms-3 mt-2 d-flex align-items-center">
            <Link to={`list/${item.id}`} className="d-flex align-items-center">
              <BsJournal style={{fontSize: 25}} className="me-2 mb-1" />
              <h3 style={{display: editing ? "none" : "block"}}>{item.name}</h3>
            </Link>
            <input type="text" className="form-control form-control-lg mb-2" value={editData} placeholder="Name..." 
              style={{display: editing ? "block" : "none"}} onChange={(e) => setEditData(e.target.value)} />
            <AiOutlineCheck className="text-primary ms-3 mb-2" 
              style={{fontSize: 40, cursor:"pointer", display: editing ? "block" : "none"}} onClick={handleEdit} />  
          </div>
          <div>
            <BsPencilSquare className="text-primary me-3" style={{fontSize: 30, cursor:"pointer"}} onClick={handleToggle} />
            <CgTrashEmpty className="text-primary me-2" style={{fontSize: 35, cursor:"pointer"}} onClick={handleDelete} />
          </div>
        </div>
      </div>
    </div>
  )
};

export default ListItem;