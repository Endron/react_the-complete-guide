import React from 'react';
import './TextLengthInputValidation.scss';

const TextLengthInputValidation = (probs) => {
    const isValid = probs.text.length >= probs.min;

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
