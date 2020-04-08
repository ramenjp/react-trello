export interface IList{
    title:string;
    listid:string;
    cards:ICard[];
}

export interface ICard {
    name: string;
    listid:string;
    cardid:string;
}

export interface IBoard{
    title:string | undefined;
    id:string | undefined;
}