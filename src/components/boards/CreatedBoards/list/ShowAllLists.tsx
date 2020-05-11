import * as React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import CardContainer from '../card/CardContainer';
import { ThunkDispatch } from 'redux-thunk';
import Card from '../card/Card';
import { IAllState, RootActions } from '../../../../Interface/IAllState';
import { submitNewCard } from '../../../../Actions/submitNewCard';
import uniqueId from 'lodash/uniqueId';
import { ICard } from '../../../../Interface/IStatus';
//import {  IList } from '../../../../Interface/IStatus';
import { DropTarget } from 'react-dnd';
import { dropAction } from '../../../../Actions/dropAction';
import { DropTargetCollector } from 'react-dnd';

const ListWrapper = styled.div`
    width: 245px;
    height: auto;
    margin: 20px;
    background-color: #ebecf0;;
    color: #333;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 6px;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    cursor: pointer;
    transition: 200ms ease-in-out;
    font-weight: 900;
    text-shadow: 0px 0px 3px #white;

    &:hover {
        box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
        transition: 200ms ease-in-out;
        transform: scale(1.10);
    }
`

const Title = styled.h2`
    color: black;
    word-break: break-all;
    padding: 10px;
`

// interface PropsByDispatch {
//     submitNewCard(name: string, listid: string, cardid: string): void
// }

// interface Props extends IList {
//     title: string;
//     listid: string;
//     cards: ICard[];
//     submitNewCard(name: string, listid: string, cardid: string): void;
//     dropAction(cardName: string, cardid: string, listid: string):void;
// }

//Drop類
//propsにはドロップ先の情報が入る
const dropSource = {
    drop(props: any, monitor: any) {
        //dragしているアイテムが取り出される
        const card = monitor.getItem();

        //drop先の情報
        console.log("dropSourceのprops", props);
        //drag元の情報
        console.log("dropSourceのmonitor.getItem()", card);
        //ドラッグしてるカードのタイトル等をdropActionに渡す
        dropAction(card.title, card.cardid, card.listid, props.listid);
    }
}

const collect: DropTargetCollector<{}, {}> = (connect, monitor) => {
    return {
        connectDropTarget: connect.dropTarget(),
        canDrop: monitor.canDrop(),
    };
}

const itemType = "CARD";


class ShowAllLists extends React.Component<any>{

    renderAllCards = () => {
        // const { lists, listid } = this.props;
        // const cards = lists[listid].cards;
        const { cards } = this.props;

        console.log("renderAllCardsの中身", cards);

        return cards.map((acard: ICard) => {
            console.log("map後のカードの名前", acard.name);
            console.log("cardのid等", acard.listid, acard.cardid);
            return (
                <Card
                    cardName={acard.name}
                    listid={acard.listid}
                    cardid={acard.cardid}
                    key={acard.cardid}
                />
            );
        });
    }

    submitCard = (values: any) => {
        const { listid } = this.props;
        //const cardName = `cardName_${listid}`
        this.props.submitNewCard(values["card"], listid, uniqueId('cardid_'));
    }


    render() {
        const { connectDropTarget } = this.props;

        //const { connectDropTarget } = this.props;
        console.log('ShowAllListsのprops', this.props);

        return connectDropTarget(
            <div>
                <ListWrapper>
                    <Title>{this.props.title}</Title>
                    <CardContainer
                        onSubmit={this.submitCard}
                        listid={this.props.listid}
                    />
                    <div>{this.renderAllCards()}</div>
                </ListWrapper>
            </div>
        );
    }
}

// const mapStateToProps = (state: IAllState): Lists => {
//     return {
//         lists: state.createList
//     }
// }

const mapDispatchToProps = (dispatch: ThunkDispatch<IAllState, any, RootActions>) => {
    return {
        submitNewCard: (name: string, listid: string, cardid: string) => { dispatch(submitNewCard(name, listid, cardid)) },
        dropAction: (cardName: string, cardid: string, listid: string,newListid:string) => { dispatch(dropAction(cardName, listid, cardid,newListid)) }
    }
}

//ActionからsubmitCard()取得
export default DropTarget(itemType, dropSource, collect)(connect(null, mapDispatchToProps)(ShowAllLists));