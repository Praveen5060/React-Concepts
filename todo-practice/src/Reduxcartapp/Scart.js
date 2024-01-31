import { legacy_createStore as createStore,applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import Rcart from './Rcart'

const middleware =[thunk]

const Scart = createStore(
    Rcart,
    composeWithDevTools(applyMiddleware(...middleware))

);

export default Scart;