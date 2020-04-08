import { CREATE_NEW_BOARD, CANCEL_CREATE_BOARD, SUBMIT_NEW_BOARD } from './../Actions/actions';
import { ICreateNewBoardAction } from '../Actions/CreateNewBoard';
import { ICancelCreateBoardAction } from '../Actions/cancelCreateBoard';
import { ISubmitNewBoardAction } from '../Actions/submitNewBoard';
import INewBoard from './../Interface/INewBoard';
import uniqueId from 'lodash/uniqueId';

const initialState: INewBoard = {
    title: undefined,
    isOpen: false
}

type Actions = ICreateNewBoardAction
    | ICancelCreateBoardAction
    | ISubmitNewBoardAction;

export default (state = initialState, action: Actions): INewBoard => {
    console.log("reducer", action);
    switch (action.type) {
        case CREATE_NEW_BOARD:
            return {
                ...state,
                title: '',
                isOpen: true,
            };

        case CANCEL_CREATE_BOARD:
            return {
                ...state,
                title: '',
                isOpen: false,
            };

        case SUBMIT_NEW_BOARD:
            return {
                ...state,
                title: action.payload.title,
                isOpen: action.payload.isOpen,
                id: uniqueId('')
            };

        default:
            return state;
    }
}