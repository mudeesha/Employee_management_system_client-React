import React, { useEffect, useState } from 'react'
import Modal from 'react-bootstrap/Modal';

export default function Testy(props) {
    const [user, setUser] = useState(null);

    useEffect(() => {
        // Here you can fetch the user data for the given userId from the API or any other data source
        // and store it in the state variable `user`
        if (props.userId) {
            // Fetch the user data for the given userId and update the state variable `user`
            const fetchedUser = { id: props.userId, name: "John Doe" };
            setUser(fetchedUser);
        }
    }, [props.userId]);


  return (
    <Modal show={props.isOpen} onHide={props.onClose}>
        <Modal.Header closeButton>
            <Modal.Title>Edit User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {user && (
                <form>
                    <label>
                        ID:
                        <input type="text" value={user.id} disabled />
                    </label>
                    <br />
                    <label>
                        Name:
                        <input type="text" value={user.name} />
                    </label>
                </form>
            )}
        </Modal.Body>
        <Modal.Footer>
            <button onClick={props.onClose}>Close</button>
            <button>Save Changes</button>
        </Modal.Footer>
    </Modal>
  )
}
