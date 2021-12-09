import { Modal, Button } from "react-bootstrap";
import UserContext from '../Contexts/UserContext';
import { useContext } from 'react';

const ListModal = (props) => {
  const { show, setShow } = props;
  const { user } = useContext(UserContext);

  const handleClose = () => setShow(false);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    let listName = e.target.children[0].value;
    const data = {
      to_do: {
        name: listName,
        user_id: user.id
      }
    }

    fetch('/to_do', {
      method: 'POST',      
      headers: new Headers({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }),
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(listData => {
        e.target.children[0].value = null;
        console.log(listData);
        handleClose();
      });
  };

  return(
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Create a new To-Do</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p className="mb-2">Pick a name for your list:</p>
        <form id="listForm" onSubmit={handleSubmit}>
          <input type="text" className="form-control" placeholder="Name..." />
        </form>
      </Modal.Body>

      <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>

          <Button type="submit" className="text-white" variant="primary" form="listForm">
            Submit
          </Button>
      </Modal.Footer>
    </Modal>
  )
};

export default ListModal;