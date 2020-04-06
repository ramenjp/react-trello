import * as React from 'react';
import { connect } from 'react-redux';
import ListTitleInput from './ListTitleInput';
import { Field, reduxForm, InjectedFormProps } from 'redux-form';

// type Props = {
//     hundleSubmit(title:string): void;
// }

interface Props {
    // onSubmit(values: any): void
}

class ListTitleForm extends React.Component<InjectedFormProps<{}, Props>>{
//const ListTitleForm: React.SFC<Props & InjectedFormProps<{}, Props>> = (props: any) => {
    render(){
        const { handleSubmit } = this.props;
        console.log("ListTitleForm,ListTitleInput",ListTitleInput);
        console.log('ListTitleForm Props', this.props.handleSubmit);
        return (
            <div>
                <form onSubmit={handleSubmit}>
                    <Field
                        name='listTitle'
                        compoment={ListTitleInput}
                        type="text"
                        placeholder={"add list"}
                    />
                </form>
            </div>
        );
    }
}

function validate(values: any) {
    let errors: any = {};
    if (!values.listTitle || values.listTitle === "") {
        errors.boardTitle = "タイトルを入力してください";
    }
    return errors;
}

// const form = reduxForm<{}, Props>({
//         validate,
//         form: 'listTitle'
//     })(ListTitleForm)

// export default connect(null)(form);

export default reduxForm<{}, Props>({
    validate,
    form: 'listTitle'
})(connect(null)(ListTitleForm));
