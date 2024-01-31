import React,{useContext, useState} from 'react'
import { store } from './App'

const Apidisplay = () => {

    const [data,setData] = useContext(store);
    const [brandname,setBrandname] = useState("");

    const changeHandler = e =>{
        setBrandname(e.target.value);
    }

    const submitHandler = e =>{
        e.preventDefault();
       setData([...data,{brandname:brandname}])

    }

  return (
    <div className='card'>
      <div className='card-body'>
         <h3 className='card-title' >
            {data.map((item,index) => 
            <div key={index}>
                <h3>{item.brandname}</h3>
            </div>)}
         </h3>
         <form onSubmit={submitHandler}>
            <input type='text' placeholder='brandname' name='brandname' value={brandname} onChange={changeHandler}/>
            <button>Add</button>
         </form>
      </div>
    </div>
  )
}

export default Apidisplay
