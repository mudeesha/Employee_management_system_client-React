import React, { useEffect, useState } from 'react'
import Testy from './Testy';

export default function Testx() {
    const [editUserId, setEditUserId] = React.useState(null);
    const [editIsOpen, setEditIsOpen] = React.useState(false);

    function showEditModal(id) {
        setEditUserId(id);
        setEditIsOpen(true);
      };

  return (
    <div className="container">
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                
                    <tr>
                        <td>1</td>
                        <td>2</td>
                        <td>
                            <button onClick={() => showEditModal("user id12")}>Edit</button>
                        </td>
                    </tr>
                
            </tbody>
        </table>
        {editIsOpen && <Testy isOpen={editIsOpen} onClose={() => setEditIsOpen(false)} userId={editUserId} />}
    </div>
  )
}
