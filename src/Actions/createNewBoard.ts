import { CREATE_NEW_BOARD } from './actions';
import { Action } from 'redux';
import INewBoard from '../Interface/INewBoard';

export interface ICreateNewBoardAction extends Action {
    type: string;
    payload: INewBoard;
}

export const createNewBoard = (): ICreateNewBoardAction => {
    return {
        type: CREATE_NEW_BOARD,
        payload: {
            isOpen: true,
            title: undefined
        }
    }
}