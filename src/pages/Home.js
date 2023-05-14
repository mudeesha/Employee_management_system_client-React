import React, { useEffect, useState } from 'react'
import '../customcss.css';
import axios from 'axios';
import { Modal, Button, Form } from 'react-bootstrap'
import AddUser from '../users/AddUser';
import DeleteUser from '../users/DeleteUser';
import EditUser from '../users/EditUser';
import ViewUser from '../users/ViewUser';
import { Link } from 'react-router-dom';

export default function Home() {
     //start load users
     const [users,setUsers]= useState([])
     const [value, setValue] = useState(null);
 
 
         // self running running function
     useEffect(()=> {
         loadUsers();
     }, []);
 
     const loadUsers=async()=>{
         const result = await axios.get("http://localhost:8080/api/getEmployees");
         setUsers(result.data);
 
     }
     //End load users


    //-----------------------------------------------------------------
    const [selectedUserId, setSelectedUserId] = React.useState(null);
    const [selectedUserName, setSelectedUserName] = useState('');
    const [selectedEmail, setSelectedEmail] = useState('');

    const [addIsOpen, setAddIsOpen] = React.useState(false);
    const [editIsOpen, setEditIsOpen] = React.useState(false);
    const [viewIsOpen, setViewIsOpen] = useState(false);
    const [deleteIsOpen, setDeleteIsOpen] = useState(false);
    

    function showEditModal(id, name, email, modalType) {
        setSelectedUserId(id);
        setSelectedUserName(name);
        setSelectedEmail(email);

        if (modalType === "view") {
            setViewIsOpen(true);
          }
          else if (modalType === "edit") {
            setEditIsOpen(true);
          }
          else if (modalType === "delete") {
            console.log("delete in home" + id);
            setDeleteIsOpen(true);
          }
          else if (modalType === "add") {
            setAddIsOpen(true);
          }
          
      };
    //------------------------------------------------------------------


    return (
        <>
        
        <div className="container">
            <div className="table-wrapper">
                <div className="table-title">
                    <div className="row">
                        <div className="col-sm-6">
                        <h2>Manage <b>Employees</b></h2>
                        
                        </div>
                        <div className="col-sm-6">
                        <Button className="btn btn-success" onClick={() => showEditModal("", "", "", "add")}><i className="material-icons">&#xE147;</i> <span>Add New Employee</span></Button>
                        <Button className="btn btn-danger"><i className="material-icons">&#xE15C;</i> <span>Delete</span></Button>
                        </div>
                    </div>
                </div>
                <table className="table table-striped table-hover">
                    <thead>
                        <tr>
                        <th>
                            <span className="custom-checkbox">
                            <input type="checkbox" id="selectAll"/>
                            <label for="selectAll"></label>
                            </span>
                        </th>
                        <th></th>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user,index)=>(
                            <tr>
                                <th>
                                    <span className="custom-checkbox">
                                    <input type="checkbox" id="checkbox1" name="options[]" value="1"/>
                                    <label for="checkbox1"></label>
                                    </span>
                                </th>
                                <td scope='row' key={index}>{index+1}</td>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>
                                    <Link onClick={() => showEditModal(user.id, user.name, user.email, "view")} className="view" ><i className="material-icons" data-toggle="tooltip" title="view">&#xE8F4;</i></Link>
                                    <Link onClick={() => showEditModal(user.id, user.name, user.email, "edit")} className="edit" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></Link> 
                                    <Link onClick={() => showEditModal(user.id, user.name, user.email, "delete")} className="delete" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></Link>
                                </td>
                            </tr>
                        ))}
                        
                    </tbody>
                </table>
                <div className="clearfix">
                    <div className="hint-text">Showing <b>5</b> out of <b>25</b> entries</div>
                    <ul className="pagination">
                        <li className="page-item disabled"><a href="#">Previous</a></li>
                        <li className="page-item"><a href="#" className="page-link">1</a></li>
                        <li className="page-item"><a href="#" className="page-link">2</a></li>
                        <li className="page-item active"><a href="#" className="page-link">3</a></li>
                        <li className="page-item"><a href="#" className="page-link">4</a></li>
                        <li className="page-item"><a href="#" className="page-link">5</a></li>
                        <li className="page-item"><a href="#" className="page-link">Next</a></li>
                    </ul>
                </div>
            </div>     
             
        </div>

        {addIsOpen && (
        <AddUser
            isOpen={addIsOpen}
            onClose={() => setAddIsOpen(false)}
            loadUsers={loadUsers}
        />
        )}

        {   editIsOpen && 
            <EditUser
                isOpen={editIsOpen}
                onClose={() => setEditIsOpen(false)}
                loadUsers={loadUsers}
                userId={selectedUserId}
                userName={selectedUserName}
                userEmail={selectedEmail}/>
        }

        {viewIsOpen && (
        <ViewUser
            isOpen={viewIsOpen}
            onClose={() => setViewIsOpen(false)}
            userId={selectedUserId}
            userName={selectedUserName}
            userEmail={selectedEmail}
        />
        )}

        {deleteIsOpen && (
        <DeleteUser
            isOpen={deleteIsOpen}
            onClose={() => setDeleteIsOpen(false)}
            loadUsers={loadUsers}
            userId={selectedUserId}
            userName={selectedUserName}
            userEmail={selectedEmail}
        />
        )}
        
        </>



        
    )
}
 