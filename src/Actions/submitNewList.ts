import { SUBMIT_NEW_LIST,STORE_NEW_LIST_TO_COLLECTION } from './actions';
import { Action, ActionCreator } from 'redux';
import { RootActions, IAllState } from '../Interface/IAllState';
import INewBoard from '../Interface/INewBoard';
import { ThunkAction } from 'redux-thunk';
import { Dispatch } from 'redux';
import IList from '../Interface/IList';
import Store from '../Store';

export interface ISubmitNewListAction extends Action {
    type:string;
    payload:INewBoard;
}

export interface IStoreNewListAction extends Action{
    type:string;
    payload: IList;
}

export const submitNew:ActionCreator<RootActions> = (
    payload:INewBoard
):RootActions=>({
        payload,
        type:SUBMIT_NEW_LIST,
}as RootActions );

export const storeNewList:ActionCreator<RootActions> = (
    payload:IList
):RootActions =>
({
    payload,
    type:STORE_NEW_LIST_TO_COLLECTION,
}as RootActions);


export const submitNewList = (title:string):ThunkAction<void,IAllState,null,RootActions> => (
    dispatch:Dispatch<Action>
) =>{
    console.log("this is submitNewListAction");
    dispatch(submitNew({
        title:title,
        isOpen:false
    }));

    const newList = {
        title:Store.getState().createList.title,
        id:Store.getState().createList.id,
        cards:[]
    }

    dispatch(storeNewList(newList))
}



