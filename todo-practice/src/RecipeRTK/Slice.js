import { createSlice } from "@reduxjs/toolkit";

const initialState = {
       localdata : []
};

const reducer = createSlice({

    name:"reducer",
    initialState,
    reducers:{
        Storingdata : (state,action) =>{
              state.localdata.push(action.payload)
        },
        GettingData : (state,action) =>{
            const datafound =  state.localdata.find(item => item.email === action.payload.email && item.password === action.payload.password);
            if(datafound){
                     alert("Correct Credintials")
                  }
                  
                  else {
                    alert("Incorrect Credintials")
                  }
        }
    }
})

export const {Storingdata,GettingData} = reducer.actions;
export default  reducer.reducer