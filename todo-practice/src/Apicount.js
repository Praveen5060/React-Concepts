import React,{useContext} from 'react'
import { store } from './App'

const Apicount = () => {
    const [data,setData] = useContext(store);
  return (
    <div className='card'>
      <div className='card-body'>
         <h3 className='card-title' >count:{data.length}</h3>
      </div>
    </div>
  )
}

export default Apicount
