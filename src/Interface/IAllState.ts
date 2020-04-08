import Store from './../Store';
import { ICreateNewBoardAction } from '../Actions/CreateNewBoard';
import { ICancelCreateBoardAction } from '../Actions/cancelCreateBoard';
import { ISubmitNewBoardAction,IStoreNewBoardAction } from '../Actions/submitNewBoard';
import { ISubmitNewListAction} from './../Actions/submitNewList';
import { ISelectActiveBoard } from '../Actions/selectActiveBoard';
import { ISubmitNewCardAction } from '../Actions/submitNewCard';

//storeに登録されてる値をとってきてすべての型を取得
export type IAllState = ReturnType<typeof Store.getState>;

export type RootActions = ICreateNewBoardAction 
                        & ICancelCreateBoardAction
                        & ISubmitNewBoardAction
                        & IStoreNewBoardAction
                        & ISubmitNewListAction
                        & ISelectActiveBoard
                        & ISubmitNewCardAction;