
import React, { useEffect, useState } from 'react'
import { fetchUsers } from '../service/api';

const AdminDashboard = () => {
    const [users, setUser]  = useState([]);

   useEffect(()=>{
     fetchUsers().then(setUser)
   },[]);
   
  return (
    <div>
        <h2>Admin Dashboard</h2>
        {
         users.map((u)=>(
            <p key={u.id}>{u.firstName}</p>

         ))
        }
    </div>
  )
}


export default AdminDashboard