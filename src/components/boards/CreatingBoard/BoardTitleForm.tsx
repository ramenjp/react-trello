import * as React from 'react';
import styled from 'styled-components';
import { Field, reduxForm, InjectedFormProps,FormErrors} from 'redux-form';
import BoardTitleInput from './BoardTitleInput';
import { connect } from 'react-redux';


const ButtonWrapper = styled.div`
    margin: 20px 0 5px 0;
    display: flex;
    justify-content: flex-end;
    width: 100%;
`

const CancelButton = styled.button`
    width: 114;
    height: 43px;
    margin: 15px -5px 5px;
    cursor: pointer;
    transition: all 200ms ease-in-out;
    border: none;
    background: none;
    color: white;
    font-weight: 900;
    text-shadow: 0px 0px 3px #000;
    &:hover {
        transition: all 200ms ease-in-out;
        color: #00ffc5;
    }
`

const SubmitButton = styled.button`
    width: 114px;
    height: 43px;
    margin: 15px 18px 5px;
    cursor: pointer;
    transition: all 250 ease-in-out;
    border: none;
    box-shadow: 0 3px 3px rgba(0,0,0,0.16), 0 3px 3px rgba(0,0,0,0.23);
    border-radius: 5px;

    &:hover {
        transition: all 250ms ease-in-out;
        color: #00BAFF;
        box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
        background-color: #dbdbdb;
    }
`

const FormWrapper = styled.div`
    display:flex;
    justify-content: center;
`

interface Props {
    cancelAction(): void;
    handleSubmit?():void;
}

//<>内は引き数（Props）の型
const BoardTitleForm: React.SFC<Props & InjectedFormProps<{}, Props, string>> = (props: Props) => {
    console.log('BoardTitleForm,props', props);
    const { handleSubmit, cancelAction } = props;
    return (
        <div>
            <FormWrapper>
                <form onSubmit={handleSubmit}>
                    <Field
                        name="boardTitle"
                        component={BoardTitleInput}
                        type="text"
                    />
                </form>
            </FormWrapper>
            <ButtonWrapper>
                <CancelButton onClick={cancelAction}>キャンセル</CancelButton>
                <SubmitButton onClick={handleSubmit} type="button">ボードを作成</SubmitButton>
            </ButtonWrapper>
        </div>
    );
}

function validate(values: {boardTitle:string}):FormErrors<{ boardTitle:string},string> {
    console.log("boardTitleForm.values", values);
    const errors:FormErrors<{boardTitle:string},string> = {};
    console.log("error",errors);
    console.log("errorboardTitle",errors.boardTitle);
    if (!values.boardTitle || values.boardTitle === "") {
        errors.boardTitle = "ボードタイトルを入力してください";
    }
    return errors;
}

const form = reduxForm<{}, Props,string>({
    validate,
    form: 'boardTitle',
})(BoardTitleForm)

export default connect(null)(form);