import * as React from 'react';

const ListTitleInput: React.FC = (field: any) => {
    console.log("this is ListTitleForm");
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
            <p className="error">{field.meta.error}</p>
        }
        </label>
    );
}

export default ListTitleInput;