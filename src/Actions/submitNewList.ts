import { SUBMIT_NEW_LIST } from './actions';
import { Action, ActionCreator } from 'redux';
import { RootActions, IAllState } from '../Interface/IAllState';
import INewBoard from '../Interface/INewBoard';
import { ThunkAction } from 'redux-thunk';
import { Dispatch } from 'redux';

export interface ISubmitNewListAction extends Action {
    type:string;
    payload:INewBoard;
}

export const submitNew:ActionCreator<RootActions> = (
    payload:INewBoard
):RootActions=>({
        payload,
        type:SUBMIT_NEW_LIST,
}as RootActions );


export const submitNewList = (title:string):ThunkAction<void,IAllState,null,RootActions> => (
    dispatch:Dispatch<Action>
) =>{
    dispatch(submitNew({
        title:title,
        isOpen:false
    }))
}



