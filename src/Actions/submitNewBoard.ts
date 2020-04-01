import { SUBMIT_NEW_BOARD } from './actions';
import { STORE_NEW_BOARD_TO_COLLECTION } from './actions';
import { Action } from 'redux';
import INewBoard from '../Interface/INewBoard';
import { Dispatch } from 'react';
import { ThunkAction } from 'redux-thunk';

export interface ISubmitNewBoardAction extends Action {
    type: string
    payload:INewBoard
}

//ThunkActionのとこ → ActionCreater

export const submitNewBoard = (title:string): ThunkAction<void, null, null, ISubmitNewBoardAction> => (
    dispatch: Dispatch<ISubmitNewBoardAction>
    ) => {
    dispatch({
        type: SUBMIT_NEW_BOARD,
        payload:{
            title: 'test',
            isOpen: false,
        }
    });

    dispatch({
        type:STORE_NEW_BOARD_TO_COLLECTION,
    })
    

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