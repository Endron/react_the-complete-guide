import React from 'react';
import './TextLengthInputValidation.scss';

const TextLengthInputValidation = (props) => {
    const isValid = props.text.length >= props.min;

    if (isValid) {
        return (
            <div className="TextLengthInputValidation TextLengthInputValidation.valid">
                <p>valid</p>
            </div>
        );
    } else {
        return (
            <div className="TextLengthInputValidation TextLengthInputValidation.invalid">
                <p>invalid</p>
            </div>
        );
    }
}

export default TextLengthInputValidation;
