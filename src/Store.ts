import {createStore, applyMiddleware} from 'redux'
import RootReducer from './Reducer/RootReducer';
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension'

const middleware = applyMiddleware(thunk);

const Store = createStore(
    RootReducer,
    composeWithDevTools(middleware)
)

export default Store;