import React from 'react';
//import { Field } from 'redux-form';
import styled from 'styled-components';
import { submitNewList } from '../../../../Actions/submitNewList'
import ListTitleForm from './ListTitleForm';
import { IAllState, RootActions } from '../../../../Interface/IAllState'
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';

const ListEdittingWrapper = styled.div`
    width: 245px;
    height: auto;
    margin: 20px;
    background-color: white;
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

interface PropsByDispatch{
    submitNewList(title:string):void
}

class ListEdittingBoard extends React.Component<PropsByDispatch>{
    constructor(props:PropsByDispatch){
        super(props);
        this.submit = this.submit.bind(this);
    }

    submit = (values: any) => {
        this.props.submitNewList(values.listTitle)
        values.listTitle = '';
    }
    
    render() {
        console.log('this is ListEdittingBoard');
        return (
            <ListEdittingWrapper>
                <div>
                <ListTitleForm
                    onSubmit={this.submit}
                />
                </div>
            </ListEdittingWrapper>
        );
    }
}

const mapDispatchToProps = (dispatch:ThunkDispatch<IAllState, any, RootActions>) => {
    return {
        submitNewList: (title:string) => {dispatch(submitNewList(title)) }
    }
}

export default connect(null,mapDispatchToProps)(ListEdittingBoard);