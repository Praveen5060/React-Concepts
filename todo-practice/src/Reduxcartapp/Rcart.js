const initial = [];

export default function Rcart(state=initial,Acart){
    const {type,payload} = Acart;

    switch(type){
        case "ADD":
            return [...state,payload];
            
        case "REMOVE":
            return state.filter( item => item.name !== payload.name)
        default:
            return state        
    }
}