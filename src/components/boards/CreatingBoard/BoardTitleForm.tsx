import * as React from 'react';
import styled from 'styled-components';
//import { ICancelCreateBoardAction } from '../../../Actions/cancelCreateBoard';
//import INewBoard from '../../../Interface/INewBoard';
import { Field, reduxForm, InjectedFormProps } from 'redux-form';
//import * as ReduxForm from 'redux-form';
import BoardTitleInput from './BoardTitleInput';
import { connect } from 'react-redux';

const Footer = styled.div`
    display:flex
`

const ButtonWrapper = styled.div`
    margin: 20px 0 5px 0;
    display: flex;
    justify-content: flex-end;
    width: 100%;
`

const CancelButton = styled.button`
    width: auto;
    height: 43px;
    margin: 15px -5px 5px;
    text-transform: uppercase;
    cursor: pointer;
    transition: all 200ms ease-in-out;
    border: none;
    background: none;
    color: white;
    font-weight: 900;
    text-shadow: 0px 0px 3px #000;
    &:hover {
        transition: all 200ms ease-in-out;
        background-color: none;
        color: #00ffc5;
    }
`

const SubmitButton = styled.button`
    width: 114px;
    height: 43px;
    margin: 15px 18px 5px;
    text-transform: uppercase;
    cursor: pointer;
    transition: all 250 ease-in-out;
    border: none;
    box-shadow: 0 3px 3px rgba(0,0,0,0.16), 0 3px 3px rgba(0,0,0,0.23);

    &:hover {
        transition: all 250ms ease-in-out;
        color: #00BAFF;
        box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
        background-color: #dbdbdb;
    }
`

interface Props {
    cancelAction(): void;
}

//<>内は引き数（Props）の型
let BoardTitleForm: React.SFC<Props & InjectedFormProps<{}, Props>> = (props:any) => {
    console.log('BoardTitleForm,props',props);
    const {handleSubmit,cancelAction} = props;
    return (
        <Footer>
            <form onSubmit={handleSubmit}>
                <Field
                    name="boardTitle"
                    component={BoardTitleInput}
                    type="text"
                />
            </form>
            <ButtonWrapper>
                <CancelButton onClick={cancelAction}>Cancel</CancelButton>
                <SubmitButton onClick={handleSubmit} type="button">Create</SubmitButton>
            </ButtonWrapper>
        </Footer>
    );
}

function validate(values: any) {
    let errors: any = {};
    console.log(values);
    return errors;
}

const form = reduxForm<{}, Props>({
    validate,
    form: 'boardTitle',
})(BoardTitleForm)

export default connect(null)(form);