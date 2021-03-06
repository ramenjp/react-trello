export interface IList{
    title:string;
    listid:string;
    cards:ICard[];
}

export interface ICard {
    cardName: string;
    listid:string;
    newListid?:string;
    cardid:string;
}

export interface IBoard{
    title:string | undefined;
    id:string | undefined;
}