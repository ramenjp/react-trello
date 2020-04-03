import * as React from 'react';
import CreateBoardContainer from './CreatingBoard/CreateBoardContainer';
import { IAllState } from '../../Interface/IAllState';
//import INewBoard from '../Interface/INewBoard';
//import createNewBoard from './../../Actions/createNewBoard';
import { connect } from 'react-redux';
import IBoard from '../../Interface/IBoard';
import ShowAllBoards from './ShowAllBoards';
//import {styled }from '@material-ui/core';
import styled from 'styled-components';
//import IBoard from '../Interface/IBoard';

const IndexWrapper = styled.div`
    display:flex;
    flex-wrap:wrap;
`

//?をつけると入れても入れなくてもいい（null許可）
interface ReturnedBoard {
    boards: IBoard[];
}

interface Props extends ReturnedBoard { }

interface State {
    isOpen: boolean;
};

class BoardContainer extends React.Component<Props, State> {

    renderAllBoards = () => {
        const { boards } = this.props;
        return boards.map(board => {
            return(
            <ShowAllBoards
            title={board.title}
            id={board.id}
            key={board.id}
            />
        );
    });
}

    render() {
        return (
            <IndexWrapper>
                {this.renderAllBoards()}
                <CreateBoardContainer />
            </IndexWrapper>
        );
    }
}

//stateに配列型で全てのboard情報を受け取る
//renderAllBoardsで全て表示
const mapStateToProps = (state: IAllState): ReturnedBoard => {
    return {
        boards: [...state.boardsCollection]
    }
}

export default connect(mapStateToProps)(BoardContainer);