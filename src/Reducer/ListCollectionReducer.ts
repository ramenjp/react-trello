import { STORE_NEW_LIST_TO_COLLECTION } from "../Actions/actions";
import { IStoreNewListAction } from '../Actions/submitNewList';
import IList from "../Interface/IList";

const initialState: IList[] = []

type Action = IStoreNewListAction;

export default (state = initialState, action: Action) => {
    console.log("ListCollectionReducer", action);
    switch (action.type) {
        case STORE_NEW_LIST_TO_COLLECTION:
            return [...state, action.payload]

        default:
            return state;
    }

}