import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Style.css'; // Import your CSS file
//import {useNavigate} from 'react-router-dom'



const Signin = () => {

  const [logindata,setLoginData] = useState([{
    email:"",
    password:"",
  }])
  const {email,password} = logindata;
  
  const changeHandler = e => {
    setLoginData({...logindata,[e.target.name]:e.target.value})
  }
 
 // const navigate = useNavigate();
  const submitHandler= e => {
    e.preventDefault();
    const totaldata = JSON.parse(localStorage.getItem('localdata') || '[]');

    // if( totaldata && (totaldata =>totaldata.email === logindata.email && totaldata.password === logindata.password)){
    //   window.location.href='/Recipe'
    // }
    
    const datafound = totaldata.find((totaldata)=>totaldata.email === logindata.email && totaldata.password === logindata.password);
 

  

   if(datafound){
     window.location.href='/Recipe'
     //navigate('/Recipe')
      
    }
    
    else {
      alert("Incorrect Credintials");
    }

    setLoginData({
      email:"",
      password:"",
    })
  };

  return (
    
    <center>
      <br/><br/><br/>
      <div className="login-box">
      <h1>Login</h1>
      <h4>Welcome!</h4>
      <form onSubmit={submitHandler}>
        
        <input
          className="in-box"
          type="email"
          placeholder='Email'
          name='email'
          value={email}
          onChange={changeHandler}
          
        />
        
        <input
          className="in-box"
          type="password"
          placeholder='Password'
          name='password'
          value={password}
          onChange={changeHandler}
          
        />
        <button type='submit' className='btn1' onClick={submitHandler}>Signin</button>
      </form>
      <p>
        New User? <Link to="/Signup" className='link'>Sign Up</Link>
      </p>
    </div>
    </center>
  );
};

export default Signin
