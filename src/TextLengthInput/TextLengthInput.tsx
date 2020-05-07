import React, {Component, ChangeEvent} from 'react';
import TextLengthInputValidation from './TextLenghtInputValidation';
import CharsComponent from '../CharsComponent/CharsComponent';

interface TextLengthInputState {
    readonly text: string
}

class TextLengthInput extends Component<{}, TextLengthInputState> {

    state: TextLengthInputState = {
        text: ""
    }

    inputChangedHandler = (event: ChangeEvent<HTMLInputElement>) => {
        console.log(event);

        this.updateTextHandler(event.target.value)
    }

    updateTextHandler = (newText: string ) => {
        this.setState({
            text: newText
        });
    }

    render() {
        return (
            <div className="TextLengthInput">
                <input type="text" onChange={this.inputChangedHandler} value={this.state.text}/>
                <p>input length: {this.state.text.length}</p>
                <TextLengthInputValidation text={this.state.text} min={5}/>
                <CharsComponent text={this.state.text} updateTextHandler={this.updateTextHandler}/>
            </div>
        );
    }
}; 

export default TextLengthInput;
