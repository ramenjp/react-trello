import { SUBMIT_NEW_BOARD } from './actions';
import { STORE_NEW_BOARD_TO_COLLECTION } from './actions';
import { Action, ActionCreator } from 'redux';
import INewBoard from '../Interface/INewBoard';
import { Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import Store from './../Store';
import { RootActions, IAllState } from '../Interface/IAllState';
import IBoard from '../Interface/IBoard';


export interface ISubmitNewBoardAction extends Action {
    type: string;
    payload: INewBoard;
}

export interface IStoreNewBoardAction extends Action {
    type: string;
    payload: IBoard;
}

export const setNewBoard: ActionCreator<RootActions> = (
    payload: INewBoard
): RootActions =>
    ({
        payload,
        type: SUBMIT_NEW_BOARD,
    } as RootActions);

export const storeNewBoard:ActionCreator<RootActions> = (
    payload: IBoard
): RootActions =>
    ({
        payload,
        type:STORE_NEW_BOARD_TO_COLLECTION,
}as RootActions);



export const submitNewBoard = (title: string): ThunkAction<void, IAllState, null, RootActions> => (
    dispatch: Dispatch<Action>
) => {
    dispatch(setNewBoard({
        title: title,
        isOpen: false
    }));

    const newBoard = {
        title: Store.getState().createBoard.title,
        id: Store.getState().createBoard.id
    }
    dispatch(storeNewBoard(newBoard))
}





// export const submitNewBoard = (title:string): ISubmitNewBoardAction => {
//     console.log("submit_new_board action",title)
//     return {
//         type: SUBMIT_NEW_BOARD,
//         payload:{
//                 title:title,
//                 isOpen:false
//             }
//     }
// }