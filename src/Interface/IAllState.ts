import Store from './../Store';
import { ICreateNewBoardAction } from '../Actions/CreateNewBoard';
import { ICancelCreateBoardAction } from '../Actions/cancelCreateBoard';
import { ISubmitNewBoardAction,IStoreNewBoardAction } from '../Actions/submitNewBoard';

//storeに登録されてる値をとってきてすべての型を取得
export type IAllState = ReturnType<typeof Store.getState>;

export type RootActions = ICreateNewBoardAction 
                        & ICancelCreateBoardAction
                        & ISubmitNewBoardAction
                        & IStoreNewBoardAction;