import { SUBMIT_NEW_LIST, SUBMIT_NEW_CARD, DROP_ACTION } from '../Actions/actions';
import { ISubmitNewListAction } from './../Actions/submitNewList';
import { ISubmitNewCardAction } from './../Actions/submitNewCard';
import { IDropAction } from './../Actions/dropAction';
import uniqueId from 'lodash/uniqueId';
import { IList, ICard } from '../Interface/IStatus';

const initialState = {}

type Actions = ISubmitNewListAction
    & ISubmitNewCardAction
    & IDropAction;

export type Lists = {
    [listid: string]: IList
}

export default (state: Lists = initialState, action: Actions): Lists => {
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
            //console.log("SUBMIT_NEW_CARD action.payload", action.payload);
            //console.log("SUBMIT_NEW_CARD state", state);
            //const { name,listid,cardid } = action.payload;

            const name: string = action.payload.name;
            const listid: string = action.payload.listid;
            const cardid: string = action.payload.cardid;

            //カードを追加するリストを取得
            const currentList: IList = state[listid];
            const newCard: ICard[] = currentList.cards.concat({ name, listid, cardid })

            currentList.cards = newCard;

            return {
                ...state,
                [listid]: currentList
            }
        };
        case DROP_ACTION: {
            //dragアイテム
            const name: string = action.payload.cardName;
            const listid: string = action.payload.listid;
            const cardid: string = action.payload.cardid;
            //drop先listid
            const newListid: string = action.payload.newListid;

            //drag元リスト
            const draggedList: IList = state[listid];
            //drop先リスト
            const droppedList: IList = state[newListid];

            //ドロップ先のカードにドラッグアイテムを追加
            const newCard:ICard[] = droppedList.cards.concat({ name, listid:newListid, cardid });
            droppedList.cards = newCard;


            //cards[]の中から対象カードのindex番号取得
            const indexNum = draggedList.cards.findIndex((cardid)=>cardid === cardid);
            console.log("DROP_ACTOPN_indexNum",cardid,indexNum);
            //ドロップ済みのカードを削除
            const deletedCards:ICard[] = draggedList.cards.splice(indexNum,1);
            draggedList.cards.concat(deletedCards);

            return {
                ...state,
            }
        };

        default:
            return state;
    }
}