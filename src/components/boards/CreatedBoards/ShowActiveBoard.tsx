import React from 'react';
import styled from 'styled-components';
//import { reduxForm, Field } from 'redux-form';
import ListEdittingBoard from './list/ListEdittingBoard';
import { connect } from 'react-redux';
import { submitNewList } from '../../../Actions/submitNewList';
import { ThunkDispatch } from 'redux-thunk';
import { IAllState, RootActions } from '../../../Interface/IAllState';
import IList from '../../../Interface/IList';
import ShowAllLists from './list/ShowAllLists';
import { selectActiveBoard } from '../../../Actions/selectActiveBoard';
//import IBoard from '../../../Interface/IBoard';
import INewBoard from '../../../Interface/INewBoard';

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
}

interface ReturnedList {
    lists:IList[];
    activeBoard:INewBoard;
}

interface Props extends PropsByDispatch,
                        ReturnedList {}

class ShowActiveBoard extends React.Component<Props>{

    componentDidMount(){
    const {
        match,
        selectActiveBoard,
    }:any = this.props;

    selectActiveBoard(match.params.id.toString)
    }

    getTitle(){
        console.log("getTitle",this.props.activeBoard)
        this.props.activeBoard.title;
    }

    renderAllLists = () => {
        const { lists } = this.props;
        console.log('renderALL ',lists)
        return lists.map(list =>{
            return(
            <ShowAllLists
                title={list.title}
                id={list.id}
                key={list.id}
                cards={list.cards}
            />
            );
        });
    }

    submit = (values: any) => {
        this.props.submitNewList(values.listTitle);
        values.listTitle = '';
    }

    render() {
        console.log('this is ShowActiveBoard');
        return (
            <div>
                {this.getTitle()}
                <SubHeader>test</SubHeader>
                <IndexWrapper>
                    {this.renderAllLists()}
                    <ListEdittingBoard onSubmit={this.submit} />
                </IndexWrapper>
            </div>
        );
    }
}

const mapStateToProps = (state: IAllState): ReturnedList => {
    return {
        lists: state.listsCollection,
        activeBoard:state.activeBoard
    }
}

const mapDispatchToProps = (dispatch: ThunkDispatch<IAllState, any, RootActions>) => {
    return {
        submitNewList: (title: string) => { dispatch(submitNewList(title)) },
        selectActiveBoard:(id:string) => {dispatch(selectActiveBoard(id))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowActiveBoard);