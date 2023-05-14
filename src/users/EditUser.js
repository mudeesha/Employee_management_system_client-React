import React, { useEffect, useState } from 'react'
import '../customcss.css';
import axios from 'axios';
import { Modal, Button, Form } from 'react-bootstrap'

export default function EditUser(props) {
    //-------------------------------------------------------------------
    const [auser, setUser] = useState(null);

    useEffect(() => {
        // Here you can fetch the user data for the given userId from the API or any other data source
        // and store it in the state variable `user`
        if (props.userId) {
            // Fetch the user data for the given userId and update the state variable `user`
            const fetchedUser = { id: props.userId, name: props.userName, email: props.userEmail};
            setUser(fetchedUser);
        }
    }, [props.userId]);

    //--------------------------------------------------------------------

    const [users,setUsers]= useState([])
    
    const [name, setName] = useState(props.userName);
    const [email, setEmail] = useState(props.userEmail);

    const user = {
        name,
        email,
    };


    const onSubmit =async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:8080/api/updateEmployee/${props.userId}`, user);
        // setUser('');
        setName('');
        setEmail('');
        props.loadUsers();
        props.onClose();

    };

  return (
    <>

<Modal show={props.isOpen} onHide={props.onClose}>
  
    <Modal.Header closeButton>
      <Modal.Title>Edit Employee </Modal.Title>
      </Modal.Header>
      <Form onSubmit={onSubmit}>
      {auser && (
        <Modal.Body>
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" name='name' value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter name" required />
          </Form.Group>
          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" name='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" required />
          </Form.Group>
          {/* <Form.Group>
            <Form.Label>Address</Form.Label>
            <Form.Control as="textarea" rows={3} required />
          </Form.Group>
          <Form.Group>
            <Form.Label>Phone</Form.Label>
            <Form.Control type="text" required />
          </Form.Group> */}
        </Modal.Body>
        )}
        <Modal.Footer>
          <Button variant="secondary" onClick={props.onClose}>
            Cancel
          </Button>
          <Button variant="primary" type="submit">
            Save
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
    </>
  )
}
