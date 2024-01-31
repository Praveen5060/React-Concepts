import React from 'react'
import { useSelector } from 'react-redux';


const Upcart = () => {

  const productCount = useSelector(state=>state.reducer.products.length)
  return (
    <div style={{"margin":"80px 0px 10px 0px"}}>
            <center>
            <button type="button" class="btn btn-primary position-relative">
            Total Products
            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {productCount}
            </span>
            </button>
            </center>
        </div>
  )
}



export default  Upcart;
