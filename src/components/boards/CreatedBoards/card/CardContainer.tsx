import * as React from 'react';
import { Field, reduxForm, InjectedFormProps } from 'redux-form';
import { connect } from 'react-redux';
import BoardTitleInput from '../../CreatingBoard/BoardTitleInput';
// import { ThunkDispatch } from 'redux-thunk';
// import { IAllState, RootActions } from '../../../../Interface/IAllState';
// import { submitNewCard } from '../../../../Actions/submitNewCard';
// import uniqueId from 'lodash/uniqueId';

interface PropsByDispatch {
    //submitNewCard(name: string, listid: string, cardid: string): void
}

interface Props {
    listid:string;
}

class CardContainer extends React.Component<Props & PropsByDispatch & InjectedFormProps<{}, Props>>{

    // submitCard = (values: any) => {
    //     const{ listid } = this.props;
    //     const cardName = `cardName_${listid}`
    //     console.log("values",values)
    //     console.log("values.cardTitle",values[cardName])
    //     this.props.submitNewCard(values[cardName], listid, uniqueId('cardid_'));
    // }
    
    render() {
        console.log("CardContainer props,listid",this.props.listid)
        const {handleSubmit,listid } = this.props;
        console.log("handleSubmitのなかみ",handleSubmit)
        console.log(listid);

        return (
            <div>
                {/* <form onSubmit={handleSubmit(this.submitCard)}> */}
                <form onSubmit={handleSubmit}>
                    <label>
                    <Field
                        name="card"
                        component={BoardTitleInput}
                        type="text"
                    />
                    </label>
                </form>
            </div>
        );
    }
}

//function validate(values: any,props:Props) {
function validate(values: any) {
    console.log("Card Validate");
    const errors: any = {};
    // const { listid } = props;
    // const cardName = `cardName_${listid}`
    if (!values.card || values.card === "") {
        errors.card = "カードタイトルを入力してください";
    }
    return errors;
}

// const mapDispatchToProps = (dispatch: ThunkDispatch<IAllState, any, RootActions>) => {
//     return {
//         submitNewCard: (name: string, listid: string, cardid: string) => { dispatch(submitNewCard(name, listid, cardid)) }
//     }
// }

export default reduxForm<{}, Props>({
    validate,
    form: 'card'
})(connect(null)(CardContainer));
//(connect(null,mapDispatchToProps)(CardContainer));