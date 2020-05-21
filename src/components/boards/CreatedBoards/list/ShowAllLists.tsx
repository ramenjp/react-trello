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
import { dropAction } from '../../../../Actions/dropAction';
import { DropTarget, DropTargetCollector, DropTargetSpec,DropTargetMonitor } from 'react-dnd';

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
    text-shadow: 0px 0px 3px white;

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


// interface Props{
//     props:IList;
// }


//Drop類
//propsにはドロップ先の情報が入る
const dropSource: DropTargetSpec<{}> = {
    drop(props: any, monitor: DropTargetMonitor) {
        //dragしているアイテムが取り出される
        const card:ICard = monitor.getItem();
        //drop先の情報
        console.log("drop先の情報", props);
        //drag元の情報
        console.log("drag元の情報", card);
        //ドラッグしてるカードのタイトル等をdropActionに渡す
        props.dropAction(card.cardName, card.listid, card.cardid, props.listid);
    }
}

const collect: DropTargetCollector<{}, {}> = (connect, monitor) => {
    return {
        connectDropTarget: connect.dropTarget(),
        canDrop: monitor.canDrop(),
    };
}

const itemType: string = "CARD";


// interface Props{
//     title:string;
//     listid:string;
//     cardid:string;
//     cards:ICard[];
//     submitNewCard(cardName:string[],listid:string,cardid:string):void;
//     dropAction():void;
//     connectDropTarget:ConnectDropTarget;
// }

// interface DnD{
//     DropTarget:DndComponentEnhancer<Props>
// }

class ShowAllLists extends React.Component<any>{
    renderAllCards = () => {
        const { cards } = this.props;
        console.log("renderAllCardsの中身", cards);

        return cards.map((acard: ICard) => {
            console.log("map後のカードの名前", acard.cardName);
            console.log("cardのid等", acard.listid, acard.cardid);
            return (
                <Card
                    cardName={acard.cardName}
                    listid={acard.listid}
                    cardid={acard.cardid}
                    key={acard.cardid}
                />
            );
        });
    }

    //values=入力値
    submitCard = (values: { [key: string]: string[] }) => {
        const { listid } = this.props;
        this.props.submitNewCard(values[`card_${listid}`], listid, uniqueId('cardid_')+"_"+listid);
        values[`card_${listid}`] = [''];
    }

    render() {
        const { connectDropTarget } = this.props;

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


const mapDispatchToProps = (dispatch: ThunkDispatch<IAllState, null, RootActions>) => {
    return {
        submitNewCard: (name: string, listid: string, cardid: string) => { dispatch(submitNewCard(name, listid, cardid)) },
        dropAction: (cardName: string, cardid: string, listid: string, newListid: string) => { dispatch(dropAction(cardName, listid, cardid, newListid)) }
    }
}

//ActionからsubmitCard()取得
export default connect(null, mapDispatchToProps)(DropTarget(itemType, dropSource, collect)(ShowAllLists));