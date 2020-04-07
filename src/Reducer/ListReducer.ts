import { SUBMIT_NEW_LIST } from '../Actions/actions';
// import actions from 'redux-form/lib/actions';
// import { RootActions } from '../Interface/IAllState'
import { ISubmitNewListAction } from './../Actions/submitNewList';
import uniqueId from 'lodash/uniqueId';

const initialState ={}

type Actions = ISubmitNewListAction;

// type Card ={
//     id:number,
//     name:string,
//     isDone:boolean
// }

export default (state =initialState,action:Actions):any =>{
    console.log("Actiontype",action.type);
    console.log("payload",action.payload);
    switch (action.type){
        case SUBMIT_NEW_LIST:
            return{
                ...state,
                title:action.payload,
                cards:[],
                id:uniqueId('')
            };

        default:
            return state;
    }

}