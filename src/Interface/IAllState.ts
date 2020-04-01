import Store from './../Store';

//storeに登録されてる値をとってきてすべての型を取得
export type IAllState = ReturnType<typeof Store.getState>;