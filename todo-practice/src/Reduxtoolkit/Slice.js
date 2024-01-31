import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products:[]
};

const reducer = createSlice({

    name:"reducer",
    initialState,
    reducers:{
        Adding: (state,action) =>{
            state.products.push(action.payload)
        },
        Removing: (state,action) =>{
            
            state.products = state.products.filter(item => item.productName !== action.payload.productName);
            
        
        }
    }

});

export  const {Adding,Removing} = reducer.actions;

export default reducer.reducer;