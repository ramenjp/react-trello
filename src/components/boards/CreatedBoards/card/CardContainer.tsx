import * as React from 'react';
import { Field, reduxForm, InjectedFormProps } from 'redux-form';
import { connect } from 'react-redux';
import BoardTitleInput from '../../CreatingBoard/BoardTitleInput';

interface Props{}

class CardContainer extends React.Component<InjectedFormProps<{}, Props>>{
    render() {
        const {handleSubmit} = this.props;
        return (
            <form onSubmit={handleSubmit}>
                <Field
                    name="cartTitle"
                    component={BoardTitleInput}
                    input="text"
                />
            </form>
        );
    }
}

export default reduxForm<{}, Props>({
    form: 'cardTitle'
})(connect(null)(CardContainer));