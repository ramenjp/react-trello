import { CREATE_NEW_BOARD, CANCEL_CREATE_BOARD, SUBMIT_NEW_BOARD } from './../Actions/actions';
import { ICreateNewBoardAction } from '../Actions/CreateNewBoard';
import { ICancelCreateBoardAction } from '../Actions/cancelCreateBoard';
import { ISubmitNewBoardAction } from '../Actions/submitNewBoard';
import INewBoard from './../Interface/INewBoard';

const initialState:INewBoard = {
    title: undefined,
    isOpen: false
}

type Actions = ICreateNewBoardAction 
             | ICancelCreateBoardAction
             | ISubmitNewBoardAction;

export default (state = initialState, action: Actions):INewBoard => {
    console.log("reducer",action);
    switch (action.type) {
        case CREATE_NEW_BOARD:
            return {
                ...state,
                title: undefined,
                isOpen: true,
            };
        
        case CANCEL_CREATE_BOARD:
            return {
                ...state,
                title: undefined,
                isOpen: false,
            };

        case SUBMIT_NEW_BOARD:
            return {
                ...state,
                title:action.payload.title, /*actionに記入済みのtestが返ってくるはずでは？ payloadの構造が違った*/
                isOpen:action.payload.isOpen
            };

        default:
            return state;
    }
}