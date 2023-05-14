import React, { useEffect, useState } from 'react'
import '../customcss.css';
import axios from 'axios';
import { Modal, Button, Form } from 'react-bootstrap'

export default function DeleteUser(props) {
  //-------------------------------------------------------------------
  const [auser, setUser] = useState(null);

  useEffect(() => {
      // Here you can fetch the user data for the given userId from the API or any other data source
      // and store it in the state variable `user`
      if (props.userId) {
          // Fetch the user data for the given userId and update the state variable `user`
          const fetchedUser = { id: props.userId};
          setUser(fetchedUser);
      }
  }, [props.userId]);

  //--------------------------------------------------------------------

  const onSubmit =async (e) => {
      e.preventDefault();
      await axios.delete(`http://localhost:8080/api/deleteEmployee/${props.userId}`);
      props.loadUsers();
      props.onClose();

  };
    
  return (
    <>
  <Modal show={props.isOpen} onHide={props.onClose}>  
      <Modal.Header closeButton>
        <Modal.Title>Delete Employee</Modal.Title>
      </Modal.Header>
      <Form onSubmit={onSubmit}>
      {auser && (
      <Modal.Body>
        <p>Are you sure you want to delete these Record "User Id = {props.userId}"?</p>
        <p className="text-warning"><small>This action cannot be undone.</small></p>
      </Modal.Body>
     )}
      <Modal.Footer>
        <Button variant="secondary" onClick={props.onClose}>
          Cancel
        </Button>
        <Button variant="danger" type="submit">
          Delete
        </Button>
      </Modal.Footer>
      </Form>
    </Modal>
    </>
  )
}
