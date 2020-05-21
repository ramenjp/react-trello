import * as React from 'react';
import { Field, reduxForm, InjectedFormProps } from 'redux-form';
//import { connect } from 'react-redux';
import BoardTitleInput from '../../CreatingBoard/BoardTitleInput';
// import { ThunkDispatch } from 'redux-thunk';
// import { IAllState, RootActions } from '../../../../Interface/IAllState';
// import { submitNewCard } from '../../../../Actions/submitNewCard';
// import uniqueId from 'lodash/uniqueId';


interface Props {
    listid: string;
}

class CardContainer extends React.Component<Props & InjectedFormProps<{}, Props>>{
    render() {
        const { handleSubmit, listid } = this.props;
        return (
            <div>
                <form onSubmit={handleSubmit}>
                    <Field
                        name={`card_${listid}`}
                        component={BoardTitleInput}
                        type="text"
                    />
                </form>
                <p></p>
            </div>
        );
    }
}

//function validate(values: any,props:Props) {
function validate(values: any) {
    const errors: any = {};
    if (!values.card || values.card === "") {
        errors.card = "カードタイトルを入力してください";
    }
    return errors;
}


export default reduxForm<{}, Props>({
    validate,
    form: 'cardName',
})(CardContainer);