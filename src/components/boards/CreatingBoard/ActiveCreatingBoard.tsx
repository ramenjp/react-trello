import * as React from 'react';
// import { Field } from 'redux-form';
import styled from 'styled-components';
import { cancelCreateBoard } from '../../../Actions/cancelCreateBoard';
import { submitNewBoard } from '../../../Actions/submitNewBoard';
//import { Dispatch } from 'redux';
import { connect } from 'react-redux'
import BoardTitleForm from './BoardTitleForm';
import { ThunkDispatch } from 'redux-thunk';
//import { ISubmitNewBoardAction } from '../../../Actions/submitNewBoard';
import { RootActions, IAllState } from '../../../Interface/IAllState';

export const Wrapper = styled.div`
    width: 245px;
    height: auto;
    margin: 20px;
    background-color: rgb(75,191,107);
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

const Title = styled.h4`
    color: white;
    text-shadow: 0px 0px 3px #000;
    border-bottom:solid;
`

const BodyWrapper = styled.h4`
    display: flex;
    flex-direction: column;
    margin: 10px;
`

//mapDispatchToPropsで受け取ったPropsの
//actionからは何も受け取ってないから

interface DispatchByProps {
    cancelCreateBoard(): void,
    submitNewBoard(title:string): void
}

class ActiveCreatingBoard extends React.Component<DispatchByProps> {
    constructor(props:DispatchByProps){
        super(props);
        this.submit=this.submit.bind(this);
    }
    
    submit = (values:any) =>{
        console.log('ActiveCreatingBoard:values.boardTitle',values)
        this.props.submitNewBoard(values.boardTitle);
        values.boardTitle = '';
    }

    render() {
        return (
            //onSubmitはHTMLでいうinput type="" method=""みたいなやつ
            <div>
                <Wrapper>
                    <Title>ボードタイトルを追加</Title>
                    <BodyWrapper>
                        <BoardTitleForm
                            cancelAction={this.props.cancelCreateBoard}
                            onSubmit={this.submit}
                        />
                    </BodyWrapper>
                </Wrapper>
            </div>
        );
    }
}

const mapDispathToProps = (dispatch:ThunkDispatch<IAllState,any,RootActions>) => {
    return {
        submitNewBoard: (title:string) => { dispatch(submitNewBoard(title)) },
        cancelCreateBoard: () => { dispatch(cancelCreateBoard() ) }
    }
}

//nullのとこはstoreから受け取る値,mapDispatchToPropsのとこはactionをpropsに登録的な意味
export default connect(null, mapDispathToProps)(ActiveCreatingBoard);