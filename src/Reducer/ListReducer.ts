import { SUBMIT_NEW_LIST, SUBMIT_NEW_CARD } from '../Actions/actions';
import { ISubmitNewListAction } from './../Actions/submitNewList';
import { ISubmitNewCardAction } from './../Actions/submitNewCard';
import uniqueId from 'lodash/uniqueId';
import { IList } from '../Interface/IStatus';

const initialState = {}

type Actions = ISubmitNewListAction
             & ISubmitNewCardAction;


export type Lists = {
    [listid: string]: IList
}

export default (state:Lists = initialState, action: Actions): Lists => {
    const listid = uniqueId("list_");
    switch (action.type) {
        case SUBMIT_NEW_LIST:
            return {
                ...state,
                [listid]: {
                    title: action.payload,
                    listid: listid,
                    cards: []
                }
            };

        case SUBMIT_NEW_CARD: {
            console.log("SUBMIT_NEW_CARD action.payload",action.payload);
            console.log("SUBMIT_NEW_CARD state",state);
            //const { name,listid,cardid } = action.payload;

            const name:string = action.payload.name;
            const listid:string = action.payload.listid;
            const cardid:string = action.payload.cardid;

            //リストを追加するリストを取得
             
            const currentList:IList = state[listid];
            currentList.cards.push({ name, listid, cardid })

            console.log(state);
            return {
                ...state,
            }
        }

        default:
            return state;
    }
}