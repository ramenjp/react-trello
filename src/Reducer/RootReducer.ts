import { combineReducers } from 'redux';
import CreateBoardReducer from './CreateBoardReducer';
import {reducer as reduxFormReducer } from 'redux-form'; 


const RootReducer = combineReducers({
    form:reduxFormReducer,
    createBoard:CreateBoardReducer
})

export default RootReducer;