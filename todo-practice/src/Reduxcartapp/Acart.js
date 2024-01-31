export const Adding = (value) => async (dispatch) =>{
    dispatch({
        type: "ADD",
        payload:value
    });
};

export const Removing = (value) => async (dispatch) =>{
    dispatch({
        type:"REMOVE",
        payload: {name:value}
    });
};