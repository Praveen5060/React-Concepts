import React, { useState } from 'react';
import { GettingData } from './Slice';
import { useDispatch } from 'react-redux';
import './Style.css'; // Import your CSS file



const Signin = () => {
  const dispatch = useDispatch();
  const [logindata,setLoginData] = useState([{
    email:"",
    password:"",
  }])
  const {email,password} = logindata;
  
  const changeHandler = e => {
    setLoginData({...logindata,[e.target.name]:e.target.value})
  }
  //const Navigate = useNavigate();
  const submitHandler= e => {
    e.preventDefault();
   
    
   dispatch(GettingData(logindata));

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
      
    </div>
    </center>
  );
};

export default Signin
