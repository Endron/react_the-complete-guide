import React from 'react';
import CharComponent from './CharComponent'

const CharsComponent = (probs) => {
    const chars = probs.text.split('');

    const individualChar = (char) => {
        return (
            <CharComponent char={char}/>
        );
    }

    return (
        <div className="CharsComponent">
            {chars.map(individualChar)}
        </div>
    );
}

export default CharsComponent;
