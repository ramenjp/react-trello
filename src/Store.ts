import {createStore, applyMiddleware} from 'redux'
import RootReducer from './Reducer/RootReducer';
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension'
//import throttle from 'lodash/throttle';
//import { saveState } from './LocalStorage';

const middleware = applyMiddleware(thunk);

const Store = createStore(
    RootReducer,
    composeWithDevTools(middleware)
)

//throttle : 1秒毎に上から実行
//subscribe(saveState): 

// Store.subscribe(throttle(() => {
//     saveState({
//         newBoard: Store.getState().createBoard
//     })
// }, 1000));


export default Store;