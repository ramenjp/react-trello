import { STORE_NEW_BOARD_TO_COLLECTION } from '../Actions/actions';
import { IStoreNewBoardAction } from '../Actions/submitNewBoard';
import { IBoard } from '../Interface/IStatus';

const initialState: IBoard[] = []

type Action = IStoreNewBoardAction;

export default (state = initialState, action: Action) => {
    console.log("reducer", action);
    switch (action.type) {
        case STORE_NEW_BOARD_TO_COLLECTION:
            return [...state, action.payload]

        default:
            return state;
    }
}