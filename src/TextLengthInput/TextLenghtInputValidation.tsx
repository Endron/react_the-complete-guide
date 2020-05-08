import React, {Component} from 'react';
import cssStyles from './TextLengthInputValidation.module.scss';

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
                    ? [cssStyles.TextLengthInputValidation, cssStyles.valid]
                    : [cssStyles.TextLengthInputValidation, cssStyles.invalid];
        const text = this.isValid() ? "valid" : "invalid";
        
        return (
            <div className={className.join(' ')}>
                <p>{text}</p>
            </div>
        );
    }
}

export default TextLengthInputValidation;
