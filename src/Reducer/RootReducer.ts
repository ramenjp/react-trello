import { combineReducers } from 'redux';
import CreateBoardReducer from './CreateBoardReducer';
import {reducer as reduxFormReducer } from 'redux-form'; 
//import BoardsCollection from './BoardsCollectionReducer';
import BoardsCollectionReducer from './BoardsCollectionReducer';


const RootReducer = combineReducers({
    form:reduxFormReducer,
    createBoard:CreateBoardReducer,
    boardsCollection:BoardsCollectionReducer
})

export default RootReducer;