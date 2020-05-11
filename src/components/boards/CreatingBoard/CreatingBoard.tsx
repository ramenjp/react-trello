import * as React from 'react';
import { connect } from 'react-redux'
import styled from 'styled-components';
import { createNewBoard } from './../../../Actions/CreateNewBoard';
import { Dispatch } from 'redux';

export const Wrapper = styled.div`
    width: 245px;
    height: auto;
    margin: 20px;
    background-color:rgb(75,191,107);
    padding: 30px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 6px;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    cursor: pointer;
    transition: 200ms ease-in-out;
    font-weight: 900;
    text-shadow: 0px 0px 3px #000;
    
    &:hover {
        box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
        transition: 200ms ease-in-out;
        transform: scale(1.10);
    }
`
export const Text = styled.h3`
    color:white;
`

interface ICreateNewBoardHundler {
    createNewBoard(): void
}

//functionのかた(< >内)はreturnされる型を指定
class CreatingBoard extends React.Component<ICreateNewBoardHundler>{
    render() {
        return (
            <Wrapper onClick={() => this.props.createNewBoard()}>
                <Text>新しいボードを作成</Text>
            </Wrapper>
        );
    }
}

const mapDispathToProps = (dispatch: Dispatch) => {
    return {
        createNewBoard: () => {
            dispatch(createNewBoard()) }
    }
}

//nullのとこはstoreから受け取る値,createNewBoardのとこはactionとして登録的な意味
export default connect(null, mapDispathToProps)(CreatingBoard);