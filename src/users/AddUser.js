import React, { useEffect, useState } from 'react'
import '../customcss.css';
import axios from 'axios';
import { Modal, Button, Form } from 'react-bootstrap'

export default function AddUser(props) {

    // const[user, setUser]=useState({
    //     name:"",
    //     email:""
    // })

    // const{name,email}=user

    // const onInputChange=(e)=>{
    //     setUser({...user, [e.target.name]:e.target.value})
    // }

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const user = {
        name,
        email,
    };

    const onSubmit =async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:8080/api/addEmployee", user);
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
          <Modal.Title>Add New Employee</Modal.Title>
        </Modal.Header>
        <Form onSubmit={onSubmit}>
            <Modal.Body>
                <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" name='name' value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter name" required />
                </Form.Group>

                <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" name='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" required />
                </Form.Group>

                <Form.Group>
                <Form.Label>Address</Form.Label>
                {/* <Form.Control as="textarea" placeholder="Enter address" required /> */}
                </Form.Group>

                <Form.Group>
                <Form.Label>Phone</Form.Label>
                {/* <Form.Control type="text" placeholder="Enter phone number" required /> */}
                </Form.Group>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={props.onClose}>
                Cancel
            </Button>
            <Button className='btn' variant="primary" type="submit">
                Save
            </Button>
            </Modal.Footer>
        </Form>
      </Modal>
    </>
    
  )
}
