import React from 'react';

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
            </div>
        );
    }
}; 

export default TextLengthInput;