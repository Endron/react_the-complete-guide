import React from 'react';
import CharComponent from './CharComponent'

const removeCharacter = (string, index) => {
    const chars = string.split('');
    chars.splice(index, 1);

    return chars.join('');
}

const CharsComponent = (probs) => {
    const chars = probs.text.split('');

    return (
        <div className="CharsComponent" onClick={probs.clickHandler}>
            {
                chars.map(
                    (char, index) => {

                        const handler = () => {
                            const newText = removeCharacter(probs.text, index);
                            probs.updateTextHandler(newText);
                        }

                        return (
                            <CharComponent key={index} char={char} clickHandler={handler}/>
                        );
                    }
                )
            }
        </div>
    );
}

export default CharsComponent;
