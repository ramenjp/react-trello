import { CANCEL_CREATE_BOARD } from './actions';
import { Action } from 'redux';
import INewBoard from '../Interface/INewBoard';

export interface ICancelCreateBoardAction extends Action{
    type: string;
    payload: INewBoard;
}

export const cancelCreateBoard = (): ICancelCreateBoardAction =>{
    return {
        type:CANCEL_CREATE_BOARD,
        payload:{
            title:undefined,
            isOpen:false
        }
    }
}