import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Storingdata } from './Slice';
import './Style.css'



const Signup = () => {
  
  const dispatch = useDispatch();
  const [data,setData] = useState({
    firstName:"",
    lastName:"",
    email:"",
    password:"",
  })
  const {firstName,lastName,email,password} = data;

  const changeHandler = e => {
    setData({...data,[e.target.name]:e.target.value})
  }



  const submitHandler = e => {
    e.preventDefault();

    dispatch(Storingdata(data));
  
  
  
    
    setData({
      firstName:"",
      lastName:"",
      email:"",
      password:"",
    });
  };

  return (
    
    <center>
      <br/><br/><br/>
    <div className="sign-box">
      <h1>Sign Up</h1>
      <form onSubmit={submitHandler}>
        
        <input
          className="in-box"
          type="text"
          placeholder='First Name'
          name='firstName'
          value={firstName}
          onChange={changeHandler}
        /> <br/>
        
        <input
          className="in-box"
          type="text"
          placeholder='Last Name'
          name='lastName'
          value={lastName}
          onChange={changeHandler}
        /><br/>
        
        
        <input
          className="in-box"
          type="email"
          placeholder='Email'
          name='email'
          value={email}
          onChange={changeHandler}
        /><br/>
        
        <input
          className="in-box"
          type="password"
          placeholder='Password'
          name='password'
          value={password}
          onChange={changeHandler}
        /><br/>
        <button type='submit' className='btn1'>Signup</button>
      </form><br/>
     
    </div>
    </center>
    
  );
};

export default Signup
