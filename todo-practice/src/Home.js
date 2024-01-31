import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'; 
import Reactlogo from './logo.svg'


const Home = () => {

  const [boolean,setBoolean] = useState(false);

  if(boolean){
    return    <Navigate to="/dashboard"/>
  }
  return (
    <div>
      <center>
      <h1>Welcome,This is React Home Page</h1>
      <img src={Reactlogo} height='300' width='500' alt='img'/> <br/> <br/>
      <button onClick={()=> setBoolean(true)}>Move to Dashboard</button>
      </center>
    </div>
  )
}

export default Home
