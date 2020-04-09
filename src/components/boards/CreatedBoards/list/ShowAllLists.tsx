import * as React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import CardContainer from '../card/CardContainer';
import { ThunkDispatch } from 'redux-thunk';
import { IAllState, RootActions } from '../../../../Interface/IAllState';
import { submitNewCard } from '../../../../Actions/submitNewCard';
import { IList } from '../../../../Interface/IStatus';
import uniqueId from 'lodash/uniqueId';
//import Store from '../../../../Store';
import Card from '../card/Card';

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
// interface ReturnedCard{}

interface PropsByDispatch {
    submitNewCard(name: string, listid: string, cardid: string): void
}

interface Props extends IList, PropsByDispatch { }


class ShowAllLists extends React.Component<Props>{
    constructor(props: any) {
        super(props);
        this.submitCard = this.submitCard.bind(this);
    }

    renderAllCards = () =>{
        const{ cards } = this.props;
        return cards.map(card => {
            return (
                <Card
                    cardName={card.name}
                />
            )
        })
    }

    submitCard = (values: any) => {
        this.props.submitNewCard(values.cardTitle, this.props.listid, uniqueId('cardid_'));
    }

    render() {
        console.log('props cards', this.props);
        return (
            <ListWrapper>
                <Title>{this.props.title}</Title>
                <CardContainer onSubmit={this.submitCard} />
                {this.renderAllCards}
            </ListWrapper>
        );
    }
}

// const mapStateToProps = (state:IAllState):ReturnedCard => {
//     return{
//     cards:lists.cards
//     }
// }


const mapDispatchToProps = (dispatch: ThunkDispatch<IAllState, any, RootActions>) => {
    return {
        submitNewCard: (name: string, listid: string, cardid: string) => { dispatch(submitNewCard(name, listid, cardid)) }
    }
}

//ActionからsubmitCard()取得
export default connect(mapDispatchToProps)(ShowAllLists);