import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const Home = () => {
  const users = useLoaderData();
  const [displayUsers, setDisplayUsers] = useState(users)

  const deleteUser = (user) => {
    const agree =window.confirm(`Are you sure You want to delete? ${user.name}`)
    if(agree){
        // console.log('deleting user ', user._id)
        fetch(`http://localhost:5000/users/${user._id}`,{
            method: 'DELETE'
        })
        const remaining = displayUsers.filter(u=> u._id !== user._id)
        setDisplayUsers(remaining)
    }
  };

  return (
    <div>
      <h2>Users: {displayUsers.length}</h2>
      <div>
        {displayUsers.map((user) => (
          <p key={user._id}>
            {" "}
            {user.name} {user.email} 
            <Link to={`/update/${user._id}`}><button>Update</button></Link>
            <button onClick={()=>deleteUser(user)}>X</button>
          </p>
        ))}
      </div>
    </div>
  );
};

export default Home;
