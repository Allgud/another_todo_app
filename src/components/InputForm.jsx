import React from "react";

const InputForm = ({text, handleChange, handleSubmit}) => (
    <label>
        <input type="text" value={text} onChange={event => handleChange(event)} />
        <button type='button' onClick={handleSubmit}>Add ToDo</button>
    </label>
)

export default InputForm