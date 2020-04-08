import { combineReducers } from 'redux';
import CreateBoardReducer from './CreateBoardReducer';
import {reducer as reduxFormReducer } from 'redux-form'; 
import BoardsCollectionReducer from './BoardsCollectionReducer';
import ListReducer from './ListReducer';
import ActiveBoardReducer from './ActiveBoardReducer';

const RootReducer = combineReducers({
    form:reduxFormReducer,
    createBoard:CreateBoardReducer,
    boardsCollection:BoardsCollectionReducer,
    createList:ListReducer,
    activeBoard:ActiveBoardReducer
})

export default RootReducer;