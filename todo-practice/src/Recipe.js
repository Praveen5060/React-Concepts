import React,{useState} from 'react'




const App = () => {

const [search,setSearch] = useState(" ");
const [data,setData] = useState([]);
const YOUR_APP_ID = "fd473e15";
const YOUR_APP_KEY ="937ddf27c5599ba0f02913aa55a67b65";




const changeHandler = e => {
  setSearch(e.target.value);
}

const submitHandler = e => {
  e.preventDefault();
 fetch(`https://api.edamam.com/search?q=${search}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=32&calories=591-722&health=alcohol-free`)
 .then(response => response.json())
 .then(data => setData(data.hits))
}




  return (
    <div>
      <center>
        <h1>Food Recipe App</h1> <br/>
        <form onSubmit={submitHandler}>
          <input type='text' placeholder='Food Item Name' value={search} onChange={changeHandler}/> <br/><br/>
          <button className='btn'>Submit</button><br/><br/>
          
        </form>
        

        <h3>Recipes</h3> <br/> <br/>
        <div className='container'>
             

          {data.map( (item,index) =>
          <div className='container_card'  key={index}>
            
            <img className='image' src={item.recipe.image} alt='img' />
            <h4>{item.recipe.label}</h4>
            <button className='btn' >Buy</button> <br/> <br/>
            
          </div>
          )}

            
           
          
        </div>

      </center>
    </div>
  )
}

export default App
