import { SUBMIT_NEW_LIST, SUBMIT_NEW_CARD } from '../Actions/actions';
import { ISubmitNewListAction } from './../Actions/submitNewList';
import uniqueId from 'lodash/uniqueId';
import { IList } from '../Interface/IStatus';
const initialState = {}

type Actions = ISubmitNewListAction;

export type Lists = {
    [listId: string]: IList
}

export default (state = initialState, action: Actions): Lists => {
    const listId = uniqueId("");
    switch (action.type) {
        case SUBMIT_NEW_LIST:
            return {
                ...state,
                [listId]: {
                    title: action.payload,
                    id: listId,
                    cards: []
                }
            };

        case SUBMIT_NEW_CARD: {
            //const{ name,listid,cardid } = action.payload;

            const name = action.payload;
            const listid = action.payload;
            const cardid = action.payload;

            //リストを追加するリストを取得
            const nowList = state[listid];
            nowList.cards.push({ name: name, listid, cardid })
            return {
                ...state,
                [listid]: nowList
            }
        }

        default:
            return state;
    }
}