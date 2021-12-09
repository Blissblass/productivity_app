import { Modal, Button } from "react-bootstrap";

const ListModal = (props) => {
  const { show, setShow } = props;
  const handleClose = () => setShow(false);
  const handleSubmit = () => {
    fetch()
  };

  return(
    <Modal show={show} onHide={handleClose}>
    
    <Modal.Header closeButton>
        <Modal.Title>Create a new To-Do</Modal.Title>
    </Modal.Header>

    <Modal.Body>
      <p className="mb-2">Pick a name for your list:</p>
      <input type="text" className="form-control" placeholder="Name..." />
    </Modal.Body>
    

    <Modal.Footer>
      
      <Button variant="secondary" onClick={handleClose}>
        Close
      </Button>

      <Button className="text-white" variant="primary" onClick={handleClose}>
        Submit
      </Button>

    </Modal.Footer>
  </Modal>
  )
};

export default ListModal;