import React from 'react';
import styled from 'styled-components';
// import { reduxForm, Field } from 'redux-form';
// import { List } from '@material-ui/core';
import ListEdittingBoard from './list/ListEdittingBoard';

const SubHeader = styled.h4`
    display:flex;
    color:black;
    font-weight: 900;
`

class ShowActiveBoard extends React.Component{
    render(){
        console.log('this is ShowActiveBoard');
        return(
        <div>
            <SubHeader>test</SubHeader>
            <ListEdittingBoard />
        </div> 
        );
    }
}

export default ShowActiveBoard;