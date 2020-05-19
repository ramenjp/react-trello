import { SUBMIT_NEW_CARD } from './actions';
import { Action, ActionCreator,Dispatch } from 'redux';
import { RootActions, IAllState } from '../Interface/IAllState';
import { ThunkAction } from 'redux-thunk';
import { ICard } from '../Interface/IStatus';

//型
export interface ISubmitNewCardAction extends Action {
    type: string;
    payload: ICard
}

//ActionCreator
export const setNewCard: ActionCreator<RootActions> = (
    payload: ICard
): RootActions =>
    ({
        payload,
        type: SUBMIT_NEW_CARD,
    } as RootActions);

//Action
export const submitNewCard = (name: string, listid: string, cardid: string): ThunkAction<void, IAllState, null, RootActions> => (
    dispatch: Dispatch<Action>
) => {
    console.log("submitNewCardActionのlistid", listid)
    dispatch(setNewCard({
        name: name,
        listid: listid,
        cardid:cardid
    }));
}