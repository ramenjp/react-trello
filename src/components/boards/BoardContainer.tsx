import * as React from 'react';
import CreateBoardContainer from './CreatingBoard/CreateBoardContainer';
import { IAllState } from '../../Interface/IAllState';
import { connect } from 'react-redux';
import { IBoard } from '../../Interface/IStatus';
import ShowAllBoards from './ShowAllBoards';
import styled from 'styled-components';

const IndexWrapper = styled.div`
    display:flex;
    flex-wrap:wrap;
`

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
            return (
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
const mapStateToProps = (state: IAllState): ReturnedBoard => {
    return {
        boards: [...state.boardsCollection]
    }
}

export default connect(mapStateToProps)(BoardContainer);