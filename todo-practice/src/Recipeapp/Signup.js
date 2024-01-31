import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Style.css'


const Signup = () => {

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

  const localdata = JSON.parse(localStorage.getItem('localdata') || '[]') ;
  localdata.push(data);
  localStorage.setItem('localdata',JSON.stringify(localdata))  
  //localStorage.setItem('userdata',JSON.stringify(data));
  
  
    
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
      <p>
        Already have an account? <Link to='/Signin' className='link'>Signin</Link>
      </p>
    </div>
    </center>
    
  );
};

export default Signup
