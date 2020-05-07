import React from 'react';
import TextLengthInputValidation from './TextLenghtInputValidation';
import CharsComponent from '../CharsComponent/CharsComponent';

class TextLengthInput extends React.Component {

    state = {
        text: ""
    }

    inputChangedHandler = (event) => {
        this.updateTextHandler(event.target.value)
    }

    updateTextHandler = (newText) => {
        this.setState({
            text: newText
        });
    }

    render = () => {
        return (
            <div className="TextLengthInput">
                <input type="text" onChange={this.inputChangedHandler} value={this.state.text}/>
                <p>input length: {this.state.text.length}</p>
                <TextLengthInputValidation text={this.state.text} min="5"/>
                <CharsComponent text={this.state.text} updateTextHandler={this.updateTextHandler}/>
            </div>
        );
    }
}; 

export default TextLengthInput;
