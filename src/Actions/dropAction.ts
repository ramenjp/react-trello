import { DROP_ACTION } from './actions';
import { Action, ActionCreator, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { RootActions, IAllState } from '../Interface/IAllState';
//import { ICard } from '../Interface/IStatus';

export interface dropCard {
    cardName: string,
    cardid: string,
    listid: string,
    newListid: string
}

export interface IDropAction extends Action {
    payload: dropCard;
}

export const dropActivate: ActionCreator<RootActions> = (
    payload: dropCard
): RootActions => ({
    payload,
    type: DROP_ACTION,
} as RootActions);

export const dropAction = (cardName: string, cardid: string, listid: string, newListid: string): ThunkAction<void, IAllState, null, RootActions> => (
    dispatch: Dispatch<Action>
) => {
        console.log("this is dropAction");
        dispatch(dropActivate({
            cardName: cardName,
            cardid: cardid,
            listid: listid,
            newListid: newListid
        }))
}