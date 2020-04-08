//import INewBoard from '../Interface/INewBoard';
import { SELECT_ACTIVE_BOARD } from '../Actions/actions';
import { ISelectActiveBoard } from '../Actions/selectActiveBoard';
import { IBoard } from '../Interface/IStatus';

const initialState:IBoard = {
    title:'',
    id:''
}

type Action = ISelectActiveBoard;

export default (state = initialState, action: Action): IBoard => {
    switch (action.type) {
        case SELECT_ACTIVE_BOARD:
            return {
                ...state,
                title:action.payload.title,
                id:action.payload.id
            };
        
        default:
            return state;
    }
}