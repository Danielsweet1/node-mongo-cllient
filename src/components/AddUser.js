import React, { useState } from 'react';

const AddUser = () => {
    const [user, setUser] = useState({})
   

    const handleSubmit = e => {
        e.preventDefault();

        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            e.target.reset()
        })
    }

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newUser = {...user}
        newUser[field] = value;
        setUser(newUser)

    }


    return (
        <div>
            <h2>Please Add User</h2>
            <form onSubmit={handleSubmit}>
                <input onBlur={handleOnBlur} type="text" name="name" id="" placeholder='name' required />
                <br /><br />
                <input onBlur={handleOnBlur} type="text" name="address" id="" placeholder='address' required />
                <br /><br />
                <input onBlur={handleOnBlur} type="email" name="email" id="" placeholder='email' required/>
                <br />
                <button type="submit">Add User</button>
            </form>
        </div>
    );
};

export default AddUser;