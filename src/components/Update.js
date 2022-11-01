import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';


const Update = () => {
    const storedUser = useLoaderData()
    const [user, setUser] = useState(storedUser)
   

    const handleUpdateUser = e => {
        e.preventDefault();

       console.log(user)
       fetch(`http://localhost:5000/users/${storedUser._id}`,{
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(user)
       })
       .then(res=>res.json())
       .then(data=>console.log(data))
    }

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newUser = {...user}
        newUser[field] = value;
        setUser(newUser)

    }
    return (
        <div>
            <h2>Update user: {storedUser.name}</h2>
            <div>
            <form onSubmit={handleUpdateUser}>
                <input onChange={handleOnChange} defaultValue={storedUser.name} type="text" name="name" id="" placeholder='name' required />
                <br /><br />
                <input onChange={handleOnChange} type="text" defaultValue={storedUser.address} name="address" id="" placeholder='address' required />
                <br /><br />
                <input onChange={handleOnChange} defaultValue={storedUser.email} type="email" name="email" id="" placeholder='email' required/>
                <br />
                <button type="submit">Update User</button>
            </form>
            </div>
        </div>
    );
};

export default Update;