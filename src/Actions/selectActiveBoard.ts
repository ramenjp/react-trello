import { Action, ActionCreator, Dispatch } from 'redux';
import { RootActions, IAllState } from '../Interface/IAllState';
import { ThunkAction } from 'redux-thunk';
import { IBoard } from '../Interface/IStatus';
import { SELECT_ACTIVE_BOARD } from './actions';
import Store from '../Store';

export interface ISelectActiveBoard extends Action {
    payload: IBoard;
}

export const selectActivate: ActionCreator<RootActions> = (
    payload: IBoard
): RootActions => ({
    payload,
    type: SELECT_ACTIVE_BOARD,
} as RootActions);


export const selectActiveBoard = (id: string): ThunkAction<void, IAllState, null, RootActions> => (
    dispatch: Dispatch<Action>
) => {
    const boardsCollection = Store.getState().boardsCollection;
    const selectedBoard = boardsCollection.find(board => board.id === id)

    dispatch(selectActivate(selectedBoard))
}