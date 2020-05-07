import React, {Component} from 'react';
import CharComponent from './CharComponent'

interface CharsComponentProperties {
    readonly text: string,
    readonly updateTextHandler?: UpdateTextHandler
}

interface UpdateTextHandler {
    (newValue: string) : void
}

class CharsComponent extends Component<CharsComponentProperties> {

     removeCharacter(string: string, index: number) {
        const chars = string.split('');
        chars.splice(index, 1);
    
        return chars.join('');
    }

    render() {
        const chars = this.props.text.split('');

    return (
        <div className="CharsComponent">
            {
                chars.map(
                    (char, index) => {

                        const handler = () => {
                            if(this.props.updateTextHandler) {
                                const newText = this.removeCharacter(this.props.text, index);
                                this.props.updateTextHandler(newText);
                            }
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
}

export default CharsComponent;
