const count = 0 ;

export default function Reducer(state = count,Action){
    const {type,payload}= Action;
    
    switch(type){
        case "INCREMENT":
            return state+payload;
        case "DECREMENT":
            return state-payload;
        default:
            return state;       
    }
}