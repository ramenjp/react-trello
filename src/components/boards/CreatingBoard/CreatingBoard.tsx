import * as React from 'react';
// import { connect } from 'react-redux'
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

export const Wrapper = styled.div`
    &:hover {
        box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
        transition: 200ms ease-in-out;
        transform: scale(1.10);
    }
`
export const Text =styled.div`
    color:white;
` 

class CreatingBoard extends React.Component{
    render(){
        return(
            <Button 
            variant="contained" 
            color="primary"
            size="large"
            startIcon={<AddIcon/>}>
            Add Boards
            </Button>        
        );
    }
}

export default CreatingBoard;