import { SUBMIT_NEW_LIST } from './actions';
import { Action, ActionCreator, Dispatch } from 'redux';
import { RootActions, IAllState } from '../Interface/IAllState';
import { ThunkAction } from 'redux-thunk';

export interface ISubmitNewListAction extends Action {
    type: string;
    payload: string;
}



export const setNewList: ActionCreator<RootActions> = (
    payload: string
): RootActions => ({
    payload,
    type: SUBMIT_NEW_LIST,
} as RootActions);

export const submitNewList = (title: string): ThunkAction<void, IAllState, null, RootActions> => (
    dispatch: Dispatch<Action>
) => {
    console.log("this is submitNewListAction");
    dispatch(setNewList(title));
}


// export interface IStoreNewListAction extends Action {
//     type: string;
//     payload: IList;
// }

// export const storeNewList: ActionCreator<RootActions> = (
//     payload: IList
// ): RootActions =>
//     ({
//         payload,
//         type: STORE_NEW_LIST_TO_COLLECTION,
//     } as RootActions);
