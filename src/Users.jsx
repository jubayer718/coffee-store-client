import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const Users = () => {
  const loadedUsers = useLoaderData();
  const [users, setUsers] = useState(loadedUsers);
  const handleDelete = (id) => {
    Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
  if (result.isConfirmed) {
    
    fetch(`https://coffee-store-server-brown-delta.vercel.app/users/${id}`, {
      method: 'DELETE'
    })
      .then(res => res.json())
      .then(data => {
        if (data.deletedCount>0 ) {
        Swal.fire({
      title: "Deleted!",
      text: "Your file has been deleted.",
      icon: "success"
        });
          {
            const remainingUsers = users.filter(user => user._id !== id)
            setUsers(remainingUsers);
          }
      }
    })
  }
});
  }
  return (
    <div>
      <h2 className="text-2xl">{users.length}</h2>
      

      <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>email</th>
        <th>Creation at</th>
        <th>Last login</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
    {users.map((user,idx)=>  <tr key={user._id} className='hover'>
      <th>{idx + 1
      }</th>
      <td>{ user.name}</td>
      <td>{ user.email}</td>
      <td>{user.creationAt}</td>
      <td>{user.lastSignInTime}</td>
      <td className='flex items-center gap-7'>
        <button className='btn'>Edit</button>
        <button onClick={()=>handleDelete(user._id)} className='btn'>Delete</button>
      </td>
      </tr>)}
     
    </tbody>
  </table>
</div>
    </div>
  );
};

export default Users;