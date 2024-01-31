import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
//import { Provider } from 'react-redux';


//import Store from './Reduxconcept/Store';
//import {Store} from './RecipeRTK/Store'
//import Scart from './Reduxcartapp/Scart';
//import { Store } from './Reduxtoolkit/Store';



ReactDOM.render(
    <React.StrictMode>

    {/* <Provider store={Store}>
    <App/>
    </Provider> */}

    <App/>

    </React.StrictMode>
    ,document.getElementById('root')
);

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
