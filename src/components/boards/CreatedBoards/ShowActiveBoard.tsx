import React from 'react';
import styled from 'styled-components';
import ListEdittingBoard from './list/ListEdittingBoard';
import { connect } from 'react-redux';
import { submitNewList } from '../../../Actions/submitNewList';
import { ThunkDispatch } from 'redux-thunk';
import { IAllState, RootActions } from '../../../Interface/IAllState';
import ShowAllLists from './list/ShowAllLists';
import { selectActiveBoard } from '../../../Actions/selectActiveBoard';
import { IBoard } from '../../../Interface/IStatus';
import { RouteComponentProps } from 'react-router-dom'
import { Lists } from '../../../Reducer/ListReducer';

const SubHeader = styled.h4`
    display:flex;
    color:black;
    font-weight: 900;
`

const IndexWrapper = styled.div`
    display:flex;
`

interface PropsByDispatch {
    submitNewList(title: string): void
    selectActiveBoard(id: string): void
}

interface ReturnedList {
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
        console.log("getTitle", this.props.activeBoard)
        return this.props.activeBoard.title;
    }

    renderAllLists = () => {
        const { lists } = this.props;
        //listsのkeyだけの配列を作る
        const listId = Object.keys(lists)
        return listId.map(list => {
            const { listid, title, cards } = lists[list]
            return (
                <ShowAllLists
                    title={title}
                    listid={listid}
                    key={listid}
                    cards={cards}
                />
            );
        })
    }

    submitList = (values: any) => {
        this.props.submitNewList(values.listTitle);
        values.listTitle = '';
    }

    render() {
        console.log('this is ShowActiveBoard');
        return (
            <div>
                <SubHeader>
                    {this.getTitle()}
                </SubHeader>

                <IndexWrapper>
                    {this.renderAllLists()}
                    <ListEdittingBoard onSubmit={this.submitList} />
                </IndexWrapper>
            </div>
        );
    }
}

const mapStateToProps = (state: IAllState): ReturnedList => {
    return {
        lists: state.createList,
        activeBoard: state.activeBoard
    }
}

const mapDispatchToProps = (dispatch: ThunkDispatch<IAllState, any, RootActions>) => {
    return {
        submitNewList: (title: string) => { dispatch(submitNewList(title)) },
        selectActiveBoard: (id: string) => { dispatch(selectActiveBoard(id)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowActiveBoard);