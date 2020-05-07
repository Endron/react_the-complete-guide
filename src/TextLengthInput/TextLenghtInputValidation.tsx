import React, {Component} from 'react';
import './TextLengthInputValidation.scss';

interface TextLengthInputValidationProperties {
    text: string,
    min: number
}

class TextLengthInputValidation extends Component<TextLengthInputValidationProperties> {

    isValid(): boolean {
        return this.props.text.length >= this.props.min;
    }

    render() {
        const className = 
            this.isValid()
                    ? "TextLengthInputValidation TextLengthInputValidation.valid" 
                    : "TextLengthInputValidation TextLengthInputValidation.invalid";
        const text = this.isValid() ? "valid" : "invalid";
        
        return (
            <div className={className}>
                <p>{text}</p>
            </div>
        );
    }
}

export default TextLengthInputValidation;
