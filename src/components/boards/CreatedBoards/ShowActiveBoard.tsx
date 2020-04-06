import React from 'react';
import styled from 'styled-components';
//import { reduxForm, Field } from 'redux-form';
import ListEdittingBoard from './list/ListEdittingBoard';
import { connect } from 'react-redux';
import { submitNewList } from '../../../Actions/submitNewList';
import { ThunkDispatch } from 'redux-thunk';
import { IAllState, RootActions } from '../../../Interface/IAllState';

const SubHeader = styled.h4`
    display:flex;
    color:black;
    font-weight: 900;
`

interface PropsByDispatch{
    submitNewList(title:string):void
}

class ShowActiveBoard extends React.Component<PropsByDispatch>{
    constructor(props:PropsByDispatch){
        super(props);
        this.submit = this.submit.bind(this);
    }

    submit = (values: any) => {
        this.props.submitNewList(values.listTitle);
        values.listTitle = '';
    }

    render(){
        console.log('this is ShowActiveBoard');
        return(
        <div>
            <SubHeader>test</SubHeader>
            <ListEdittingBoard
                onSubmit={this.submit}
            />
        </div> 
        );
    }
}

const mapDispatchToProps = (dispatch:ThunkDispatch<IAllState, any, RootActions>) => {
    return {
        submitNewList:(title:string) => {dispatch(submitNewList(title)) }
    }
}

export default connect(null,mapDispatchToProps)(ShowActiveBoard);