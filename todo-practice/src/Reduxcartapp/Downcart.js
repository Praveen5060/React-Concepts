import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Adding } from './Acart';
import { Removing } from './Acart';

const Downcart = ( {Adding,Removing,products}) => {

    const [cart,setCart] = useState("");

    const changeHandler = e => {
        setCart(e.target.value);
        
    }

    const submitHandler = e => {
        e.preventDefault();
        Adding({name:cart});
        setCart("")

    }


  return (
    <div>
      <center>
        <div style={{ border:"2px solid black",
                      borderRadius: "5px",
                      width:"50%",
                      backgroundColor:"grey",
                      paddingTop:"20px"
                    }}>
            <form onSubmit={submitHandler}>
                 <input type='text' name='cart' value={cart} onChange={changeHandler} style={ {borderRadius:"5px"} }/> &nbsp; 
                 <button style={ {color : 'white',backgroundColor:"green",borderRadius:"5px"}}>Add</button>
            </form> <br/>

            {products.map((item,index) => 
            <div key={index}> 
                <li style={{color:"white"}}>{item.name} </li> &nbsp;
                <button style={{color:"white",backgroundColor:"red",borderRadius:"5px"}} onClick={()=>Removing(item.name)}>del</button>
            </div>)}
        </div>
      </center>
    </div>
  )
}

const mapStateToProps = (state) => ({
     products : state
})

export default connect(mapStateToProps,{Adding,Removing}) (Downcart)
