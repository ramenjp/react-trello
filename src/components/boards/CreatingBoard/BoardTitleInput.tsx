import * as React from 'react';
import * as ReduxForm from 'redux-form'

const BoardTitleInput = (field: ReduxForm.WrappedFieldProps) => {
    console.log("field",field);
    console.log("CardTitleのインプット",field)
    return (
        <label>
            <input
                {...field.input}
                type="text"
                className="input"
            />
            {
                field.meta.touched &&
                field.meta.error &&
                <h6 className="error">{field.meta.error}</h6>
            }
        </label>
    );
}

export default BoardTitleInput;
