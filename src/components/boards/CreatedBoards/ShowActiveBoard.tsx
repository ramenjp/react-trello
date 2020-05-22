import React from 'react';
import styled from 'styled-components';
import ListEdittingBoard from './list/ListEdittingBoard';
import { connect } from 'react-redux';
import { submitNewList } from '../../../Actions/submitNewList';
import { ThunkDispatch } from 'redux-thunk';
import { IAllState, RootActions } from '../../../Interface/IAllState';
import ShowAllLists from './list/ShowAllLists';
import { selectActiveBoard } from '../../../Actions/selectActiveBoard';
import { IBoard, ICard } from '../../../Interface/IStatus';
import { RouteComponentProps } from 'react-router-dom'
import { Lists } from '../../../Reducer/ListReducer';

const SubHeader = styled.h4`
    width: 1000px;
    height:auto
    background-color#ebecf0;
    display:flex;
    color:black;
    font-weight:900;
`
const IndexWrapper = styled.div`
    display:flex;
`

interface PropsByDispatch {
    submitNewList(title: string): void
    selectActiveBoard(id: string): void
}

export interface ReturnedList {
    lists: Lists;
    activeBoard: IBoard;
}

type Props = {} & PropsByDispatch
    & ReturnedList
    & RouteComponentProps<{ id: string }>


class ShowActiveBoard extends React.Component<Props>{
    componentDidMount() {
        const {
            match,
            selectActiveBoard,
        } = this.props;

        selectActiveBoard(match.params.id)
    }

    getTitle() {
        return this.props.activeBoard.title;
    }

    renderAllLists = () => {
        const { lists } = this.props;
        //listsのkeyだけの配列を作る
        
        const listIds = Object.keys(lists)
        
        return listIds.map((listId: string) => {
            console.log(lists[listId]);
            const { listid, title, cards }: { listid: string, title: string, cards: ICard[]} = lists[listId];
            return (
                <ShowAllLists
                    title={title}
                    listid={listid}
                    key={listid}
                    cards={cards}
                />
            );
        });
    }

    submitList = (values:any) => {
        console.log("submitList",values);
        this.props.submitNewList(values.listTitle);
        values.listTitle = '';
    }

    render() {
        return (
            <div>
                <SubHeader>{this.getTitle()}</SubHeader>

                <IndexWrapper>
                    {this.renderAllLists()}
                    <ListEdittingBoard onSubmit={this.submitList} />
                </IndexWrapper>
            </div>
        );
    }
}

const mapStateToProps = (state: IAllState): ReturnedList => {
    console.log("ListReducer更新！")
    return {
        lists: state.createList,
        activeBoard: state.activeBoard
    }
}       

const mapDispatchToProps = (dispatch: ThunkDispatch<IAllState, null, RootActions>) => {
    return {
        submitNewList: (title: string) => { dispatch(submitNewList(title)) },
        selectActiveBoard: (id: string) => { dispatch(selectActiveBoard(id)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowActiveBoard);