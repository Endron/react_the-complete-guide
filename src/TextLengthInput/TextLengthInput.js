import React from 'react';
import TextLengthInputValidation from './TextLenghtInputValidation';

class TextLengthInput extends React.Component {

    state = {
        text: ""
    }

    inputChangedHandler = (event) => {
        this.setState({
            text: event.target.value
        });
    }

    render = () => {
        return (
            <div className="TextLengthInput">
                <input type="text" onChange={this.inputChangedHandler}/>
                <p>input length: {this.state.text.length}</p>
                <TextLengthInputValidation text={this.state.text} min="5"/>
            </div>
        );
    }
}; 

export default TextLengthInput;
