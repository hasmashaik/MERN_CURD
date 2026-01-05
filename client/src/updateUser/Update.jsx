import React, { useEffect, useState } from 'react'
import "./Update.css"
import { Link,useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';
import  toast from "react-hot-toast"

export const Update= () => {
    const users={
        name:"",
        email:"",
        address:"",
    };
const [user,setUser]=useState(users);
const navigate=useNavigate();
const {id}=useParams();

const inputHandler=(e)=>{
    const{name,value}=e.target
    console.log(name,value); 

    setUser({...user,[name]:value});
}
useEffect(()=>{
    axios.get(`http://localhost:7000/api/user/${id}`)
    .then((Response)=>{
        setUser(Response.data);
    })
    .catch((e)=>{
        console.log(e);
    });
},[id]);
const submitForm=async(e)=>{
    e.preventDefault();
    await axios.put(`http://localhost:7000/api/update/user/${id}`,user)
    .then((Response)=>{
        // console.log("User Created Succefully.");
        toast.success(Response.data.message, { position: "top-right" });
        navigate("/");
    })
    .catch((error)=>{
        console.log(error)
    })
}
  return (
    <div className='addUser'>
        <Link to="/" type="button" class="btn btn-secondary">
            <i className="fa-solid fa-backward"></i> Back</Link>
        <h3>Update User</h3>  
        <form className='addUserForm' onSubmit={submitForm}>
            <div className='inputGroup'>
                <label htmlFor="name">Name : </label>
                <input type="text"
                id="name"
                onChange={inputHandler}
                name="name"
                value={user.name}
                autoComplete='off'
                placeholder='Enter Your Name'
                />
            </div>
             <div className='inputGroup'>
                <label htmlFor="name">E-mail : </label>
                <input type="email"
                id="email"
                onChange={inputHandler}
                name="email"
                 value={user.email}
                autoComplete='off'
                placeholder='Enter Your Email'
                />
            </div>
             <div className='inputGroup'>
                <label htmlFor="name">Address : </label>
                <input type="text"
                id="address"
                onChange={inputHandler}
                name="address"
                 value={user.address}
                autoComplete='off'
                placeholder='Enter Your Addess'
                />
            </div>
            <div className='inputGroup'>
                <button type="submit" class="btn btn-primary">Submmit</button>
            </div>
            </form>  
        </div>
  )
}
