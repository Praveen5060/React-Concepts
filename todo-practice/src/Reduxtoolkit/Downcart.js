import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Adding } from './Slice';
import { Removing } from './Slice';



const Downcart = ( ) => {
    
  const products = useSelector((state)=>state.reducer.products)
    const dispatch = useDispatch();
    const [cart,setCart] = useState("");

    const changeHandler = e => {
        setCart(e.target.value);
        
    }

    const submitHandler = e => {
        e.preventDefault();
       dispatch(Adding({productName:cart}));
        setCart("");
       
        
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
                 <button style={ {color : 'white',backgroundColor:"green",borderRadius:"5px"}}  >Add</button>
            </form> <br/>

            {products.map((item,index) => 
            <div key={index} style={{display:"flex", justifyContent:"space-between"}}> 
                <p style={{color:"white",marginLeft:"44px"}}>{item.productName} </p> 
                <button style={{color:"white",backgroundColor:"red",borderRadius:"5px",marginRight:"45px",height:"25px"}} onClick={()=>dispatch(Removing(item))}>X</button>
            </div>)}
        </div>
      </center>
    </div>
  )
}



export default Downcart
