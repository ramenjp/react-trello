import * as React from 'react';
import { Field, reduxForm, InjectedFormProps } from 'redux-form';
import { connect } from 'react-redux';
import BoardTitleInput from '../../CreatingBoard/BoardTitleInput';
import { ThunkDispatch } from 'redux-thunk';
import { IAllState, RootActions } from '../../../../Interface/IAllState';
import { submitNewCard } from '../../../../Actions/submitNewCard';
import uniqueId from 'lodash/uniqueId';
import Store from '../../../../Store';

interface PropsByDispatch {
    submitNewCard(name: string, listid: string, cardid: string): void
}

interface Props {
    listid:string;
}

// interface cardInput{
//     cardInput:
// }

class CardContainer extends React.Component<Props & PropsByDispatch & InjectedFormProps<{}, Props>>{
    submitCard = (values: any) => {
        
        const{ listid } = this.props;
        const cardName = `cardName_${listid}`
        console.log("values.cardTitle",cardName)
        const inputValues = Store.getState().form.card.values.cardName;
        this.props.submitNewCard(inputValues, this.props.listid, uniqueId('cardid_'));
    }
    
    render() {
        console.log("CardContainer props",this.props)
        const {handleSubmit,listid } = this.props;
        return (
            <div>
                <form onSubmit={handleSubmit(this.submitCard)}>
                    <Field
                        name={`cardName_${listid}`}
                        component={BoardTitleInput}
                        type="text"
                    />
                </form>
            </div>
        );
    }
}

function validate(values: any,props:Props) {
    const errors: any = {};
    const { listid } = props;
    const cardName = `cardName_${listid}`
    if (!values[cardName] || values[cardName] === "") {
        errors[cardName] = "カードタイトルを入力してください";
    }
    return errors;
}

const mapDispatchToProps = (dispatch: ThunkDispatch<IAllState, any, RootActions>) => {
    return {
        submitNewCard: (name: string, listid: string, cardid: string) => { dispatch(submitNewCard(name, listid, cardid)) }
    }
}

export default reduxForm<{}, Props>({
    validate,
    form: 'card'
})(connect(null,mapDispatchToProps)(CardContainer));