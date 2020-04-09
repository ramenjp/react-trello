import * as React from 'react';

const BoardTitleInput: React.SFC = (field: any) => {
    console.log("CardTitleのインプット",field)
    return (
        <label>
            <input
                {...field.input}
                placeholder={field.placeholder}
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
