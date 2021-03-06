import { CANCEL_CREATE_BOARD } from './actions';
import { Action, ActionCreator,Dispatch } from 'redux';
import INewBoard from '../Interface/INewBoard';
import { RootActions, IAllState } from '../Interface/IAllState';
import { setNewBoard } from './submitNewBoard';
import { ThunkAction } from 'redux-thunk';

export interface ICancelCreateBoardAction extends Action {
    type: string;
    payload: INewBoard;
}

export const cancelCreate: ActionCreator<RootActions> = (
    payload: INewBoard
): RootActions =>
    ({
        payload,
        type: CANCEL_CREATE_BOARD,
    } as RootActions);

export const cancelCreateBoard = (): ThunkAction<void, IAllState, null, RootActions> => (
    dispatch: Dispatch<Action>
) => {
    dispatch(setNewBoard({
        title: undefined,
        isOpen: false
    }));
}