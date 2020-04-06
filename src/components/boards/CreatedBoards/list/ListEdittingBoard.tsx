import * as React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import BoardTitleInput from '../../CreatingBoard/BoardTitleInput';
import { Field, reduxForm, InjectedFormProps } from 'redux-form';

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

interface Props{}

class ListEdittingBoard extends React.Component<InjectedFormProps<{}, Props>>{
    render() {
        const { handleSubmit } = this.props;
        console.log('this is ListEdittingBoard');
        return (
            <ListEdittingWrapper>
                <form onSubmit={handleSubmit}>
                    <Field
                        name="listTitle"
                        component={BoardTitleInput}
                        type="text"
                        placeholder="add a list"
                    />
                </form>
            </ListEdittingWrapper>
        );
    }
}

function validate(values: any) {
    let errors: any = {};
    if (!values.listTitle || values.listTitle === "") {
        errors.listTitle = "タイトルを入力してください";
    }
    return errors;
}

export default reduxForm<{}, Props>({
    validate,
    form: 'listTitle'
})(connect(null)(ListEdittingBoard));