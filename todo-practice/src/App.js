// login and signup autentication using Redux Toolkit

// import React from 'react'
// import Signup from './RecipeRTK/Signup'
// import Signin from './RecipeRTK/Signin'

// const App = () => {
//   return (
//     <div style={{ display: 'flex', gap: '40px',justifyContent:'center' }}>
//     <Signup />
//     <Signin />
//   </div>
//   )
// }

// export default App

  



// Redux Toolkit concept example..................................................................................

// import React from 'react'
// import Upcart from './Reduxtoolkit/Upcart';
// import Downcart from './Reduxtoolkit/Downcart';
// //import Upcart from './Reduxcartapp/Upcart';

// const App = () => {
//   return (
//     <div>
//       <Upcart />
//       <Downcart />

//     </div>
//   )
// }

// export default App



// //Redux Cart App................................................................................................

// import React from 'react'
// import Upcart from './Reduxcartapp/Upcart';
// import Downcart from './Reduxcartapp/Downcart'

// const App = () => {
//   return (
//     <div>
//       <Upcart />
//       <Downcart />
//     </div>
//   )
// }

// export default App




//Redux concept....................................................................................................

// import React from 'react'
// import {  connect } from 'react-redux'
// import { IncAction } from './Reduxconcept/Action'
// import { DecAction } from './Reduxconcept/Action'

// const App = ({localvariable,IncAction,DecAction}) => {
//   return (
//     <center>
//       <div >
//       <h3>{localvariable}</h3>
//       <button className='btn btn-success' onClick={()=>IncAction(5)}>Increment</button> &nbsp;
//       <button className="btn btn-danger "  onClick={()=>DecAction(2)}>Decrement</button>
//     </div>
//     </center>
//   )
// }

// const mapStateToProps=State=>({
//      localvariable : State
// })

// export default connect(mapStateToProps,{IncAction,DecAction}) (App)


// Context API..................................................................................................

// import React ,{createContext, useState}from 'react'
// import Apicount from './Apicount'
// import Apidisplay from './Apidisplay'

// export const store = createContext();

// const App = () => {

//   const [data,setData] = useState([
//     {
//       brandname:"Realme"
//     },
//     {
//       brandname:"Redmi"
//     },
//     {
//       brandname:"Nokia"
//     },
//   ]);

//   return (
//     <div>
//       <store.Provider value={[data,setData]}>
//         <center>
//           <Apicount/>
//           <Apidisplay/>
//         </center>
//       </store.Provider>
//     </div>
//   )
// }

// export default App




// useContext hook case..........................................................................................

// import React from 'react'
// import ComponentB from './ComponentB';

// export const UserContext = React.createContext();

// const App = () => {
//   return (
//     <div>
//       <center>
//          <UserContext.Provider value={"App to componentB"}>
//             <ComponentB />
//          </UserContext.Provider>
//       </center>
//     </div>
//   )
// }

// export default App






//Recipe App.......................................................................................

import React from 'react'
import Signup from './Signup'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Signin from './Signin'

import Recipe from './Recipe'
import './Recipe.css'
import Homepage from './Homepage'



const App = () => {
  return (
    <div>
      
      
       <center>
      <BrowserRouter>
          
         
          <Routes>
            <Route path='/' exact Component={Homepage}></Route>
            <Route path='/Signup'  Component={Signup}></Route>
            <Route path='/Signin'  Component={Signin}></Route>
            <Route path='/Recipe'  Component={Recipe}></Route>
            
          </Routes>

       </BrowserRouter>

       </center>
     
    </div>
  )
}

export default App






//Food Recipe App ..................................................................................

// import React,{useState} from 'react'
// import './App.css'



// const App = () => {

// const [search,setSearch] = useState(" ");
// const [data,setData] = useState([]);
// const YOUR_APP_ID = "fd473e15";
// const YOUR_APP_KEY ="937ddf27c5599ba0f02913aa55a67b65";




// const changeHandler = e => {
//   setSearch(e.target.value);
// }

// const submitHandler = e => {
//   e.preventDefault();
//  fetch(`https://api.edamam.com/search?q=${search}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=32&calories=591-722&health=alcohol-free`)
//  .then(response => response.json())
//  .then(data => setData(data.hits))
// }




//   return (
//     <div>
//       <center>
//         <h1>Food Recipe App</h1> <br/>
//         <form onSubmit={submitHandler}>
//           <input type='text' placeholder='Food Item Name' value={search} onChange={changeHandler}/> <br/><br/>
//           <button className='btn'>Submit</button><br/><br/>
          
//         </form>
        

//         <h3>Recipes</h3> <br/> <br/>
//         <div className='container'>
             

//           {data.map( (item,index) =>
//           <div className='container_card'  key={index}>
            
//             <img className='image' src={item.recipe.image} alt='img' />
//             <h4>{item.recipe.label}</h4>
//             <button className='btn' >Buy</button> <br/> <br/>
            
//           </div>
//           )}

            
           
          
//         </div>

//       </center>
//     </div>
//   )
// }

// export default App



//useRef hook and focussing.....................................................................................

// import React,{useEffect,useRef} from 'react'

// const App = () => {
  
//     const text = useRef(null);
    
//     const submitHandler = e => {
//       e.preventDefault();
//       console.log(text);
      

      
      
//     }
    
// useEffect(
//    () => {
//     text.current.focus();
//    }
// )


    
  
//   return (
//     <div>
//        <center>
//         <h1>Food Recipe App</h1><br/> <br/>
//        <form onSubmit={submitHandler}>
//         <input type='text' placeholder='Food Item Name' ref={text} /> <br/> <br/>
//         <button type='submit' >Submit</button> 

//        </form>
//        </center>
//     </div>
//   )
// }

// export default App




// Downloading images.............................................................................................

// import React from 'react'
// import logo from './logo.svg'

// const App = () => {
//   return (
//     <div>
//       <center>
//         <img src={logo} alt='img' height='300' width='500'/>
//         <a href={logo} download>Download</a>
//       </center>
//     </div>
//   )
// }

// export default App





// Bootstrap Basics............................................................................................

// import React from 'react'
// import {Button} from 'react-bootstrap'

// const App = () => {
//   return (
//     <div>
      
//       <Button variant="primary">Primary</Button>{' '}
//       <Button variant="secondary">Secondary</Button>{' '}
//       <Button variant="success">Success</Button>{' '}
//       <Button variant="warning">Warning</Button>{' '}
//       <Button variant="danger">Danger</Button>{' '}
//       <Button variant="info">Info</Button>{' '}
//       <Button variant="light">Light</Button>{' '}
//       <Button variant="dark">Dark</Button>
//       <Button variant="link">Link</Button>
    
//     </div>
//   )
// }

// export default App






// Lifecycle Methods in Functional Components using useEffect hook.................................................

// import React,{useState,useEffect} from 'react'


// const App = () => {

//   const [count,setCount] = useState(0);

//   useEffect( () => {

//     console.log("componentDidUpdate");// for componentDidMount and componentDidUpdate
   
//     return () => {
//         console.log("componentWillUnMount")// for componentWillUnMount
//     }

//   },[count] )

//   return (
//     <div>
//       <center>
//         <div>
//             <h4>Count:{count}</h4> 
//             <button onClick={ () => setCount(count+1)}>Increment</button> &nbsp; &nbsp;
//             <button onClick={ () => setCount(count-1)}>Decrement</button>
//         </div>
//       </center>
//     </div>
//   )
// }

// export default App




// React Router.................................................................................................

// import React from 'react'
// import Navbar from './Navbar'
// import Home from './Home'
// import Dashboard from './Dashboard'
// import About from './About'
// import { BrowserRouter,Routes,Route  } from 'react-router-dom'


// const App = () => {

//   return (
//     <div>
//       <center>
//       <BrowserRouter>
//          <Navbar/>
         
//          <Routes>
//            <Route path='/' exact Component={Home}></Route>
//            <Route path='/dashboard'  Component={Dashboard}></Route>
//            <Route path='/about'  Component={About}></Route>
//          </Routes>

//       </BrowserRouter>

//       </center>
//     </div>
//   )
// }

// export default App









// Submission of sign up data to firebase using Axios.post()......................................................

// import React,{useState} from 'react'
// import axios from 'axios'

// const App = () => {

//   const [data,setData] = useState(
//     {
//       fullname:"",
//       email:"",
//       password:"",
//       confirmPassword:"",
//     }
//   )

//   const {fullname,email,password,confirmPassword} = data;

//   const changeHandler = e => {
//         setData( {...data,[e.target.name] : e.target.value});
//   }

//   const submitHandler = e => {
//     e.preventDefault();
//     if (password===confirmPassword) 
//    { return axios.post('https://signup-5618f-default-rtdb.firebaseio.com/register.json',data)
//     .then( () => alert(" Submitted Successfully"))}
//     else return alert("passwords are not matching");
    
//   }
//   return (
//     <div>
//       <center>
//         <div className='card'>
//           <div className='card-body'>
//                <h1>Sign Up</h1>
//                <form onSubmit={submitHandler}>
//                   <input type='text' name='fullname' value={fullname} onChange={changeHandler}></input> <br/> <br/>
//                   <input type='email' name='email' value={email} onChange={changeHandler}></input> <br/> <br/>
//                   <input type='password' name='password' value={password} onChange={changeHandler}></input> <br/> <br/>
//                   <input type='password' name='confirmPassword' value={confirmPassword} onChange={changeHandler}></input><br/> <br/>
//                   <button type='submit' >Submit</button>
//                </form>
//           </div>
//         </div>
//       </center>
//     </div>
//   )
// }

// export default App





// Fetch() and Axios.get()...............................................................................

// import React,{useEffect,useState }from 'react'
// import axios from 'axios'

// const App = () => {

// const [data,setData] = useState([]);

// useEffect( () => {
//        fetch('https://jsonplaceholder.typicode.com/todos').then( response => response.json())
//        .then( data => setData(data))    //this is componentDidmou
// },[]
//)


// useEffect( () => {
//   axios.get('https://jsonplaceholder.typicode.com/todos')
//   .then(response => setData(response.data))
// },[]
// )


 
//   return (
//     <div>
//     {data.map(item => <li key={item.id}>{item.title}</li>)}
    
//     </div>
//   )
// }

// export default App




// Weather App using fetch ()..............................................................................

// import React,{ useEffect, useState} from 'react'

// const App = () => {
  
//   const [city,setCity] = useState("bangalore");
//   const [result,setResult] = useState("");
  
// const [fetchedData,setFetchedData] = useState({ });

//   let map = map(Object.entries(fetchedData));
// useEffect( () => {
  

//     fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d885aa1d783fd13a55050afeef620fcb`).then(
//       response=> response.json()).then(
//          data => {
        
//         console.log(data);
//         setFetchedData(data);
        
//          })
       
//  },[city] 
   
// )
  

//   const changeHandler = e =>{
//     setCity(e.target.value);
//   }
//   const submitHandler = e =>{
//     e.preventDefault();
//     fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d885aa1d783fd13a55050afeef620fcb`).then(
//       response=> response.json()).then(
//         data => {
//           const kelvin = data.main.temp;
//           const celcius = kelvin - 273.15;
//           setResult("Temperature at "+city+"\n"+Math.round(celcius)+"°C");
//         })
//     //.catch(error => console.log(error))
    
//       setCity("");
//   }

//   return (
//     <div>
//       <center>
//         <div className="card">
//           <div className="card-body">
//             <h4 className="card-title">Weather App</h4>
//             <form onSubmit={submitHandler}>
//               <input size="30" type="text" name="city" onChange={changeHandler} value={city}/> <br /><br />
//               <input type="submit" value="Get Temperature" />
              
//             </form><br /> <br />
//             <div>
//               <p>{result}</p>

           

              /* { 
             fetchedData.weather &&
                (
                <div>
                  <p>Location: {fetchedData.name}</p>
                  <p>Temperature: {fetchedData.main.temp} K</p>
              
            </div> 
          )} */
             

             
  
              
               
                
               /* {fetchedData.weather && (
             <div>
              <h2>Weather Details</h2>
              {fetchedData.weather.map((weatherItem, index) => (
             <div key={index}>
               <p>Description: {weatherItem.description}</p>
                </div>
             ))}
           </div>
         )} */
              
                
//             </div>
//           </div>
//         </div>
//       </center>
//     </div>
//   )
// }

// export default App





// Todolist Management...........................................................................................

// import React,{useState} from 'react'
// import TodoList from './todolist';

// const App = () => {
//   const [task,setTask] = useState("");
//   const [todos,setTodos] = useState([]);


//   const changeHandler = e =>{
//     setTask(e.target.value)
//   }
//   const submitHandler = e =>{
//     e.preventDefault();
//     const newTodos = [...todos,task];
//     setTodos(newTodos);
//     setTask("");
//   }
//   const deleteHandler = (indexValue) =>{
//     const newTodos = todos.filter((todo,index) => index !== indexValue);
//     setTodos(newTodos);
//   }
//   return (
//     <div>
//       <center>
//         <div className="card">
//           <div className="card-body">
//             <h5 className="card-title">Todo Management Application</h5>
//             <form onSubmit={submitHandler}>
//               <input size="30" type="text" name="task" value={task} onChange={changeHandler} /> &nbsp;&nbsp;
//               <input type="submit" value="Add" name="Add"/> 
              
//             </form>
//             <TodoList todolist={todos} deleteHandler={deleteHandler}/>
//           </div>
//         </div>
//       </center>
//     </div>
//   )
// }

// export default App















// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
