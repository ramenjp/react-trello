import * as React from 'react';
import { Field, reduxForm, InjectedFormProps,FormErrors } from 'redux-form';
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

function validate(values: {cardName:string}):FormErrors<{ cardName:string},string>{
    const errors: FormErrors<{cardName:string},string> = {};
    if (!values.cardName || values.cardName === "") {
        errors.cardName = "カードタイトルを入力してください";
    }
    return errors;
}


export default reduxForm<{}, Props>({
    validate,
    form: 'cardName',
})(CardContainer);