import React from 'react'
import { Link } from 'react-router-dom'


const Homepage = () =>{
  return (
    <div className='home'>
      <center>
        <div >
            
            <h1 style={{color:'white'} }>Food Recipe App</h1> <br/> 
            <Link to='/Signup'>Signup</Link> &nbsp; &nbsp;
            <Link to='/Signin'>Signin</Link> <br/> <br/>
            
            
             
        </div>
      </center>
    </div>
  )
}

export default Homepage

