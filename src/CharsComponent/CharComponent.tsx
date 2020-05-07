import React, {EventHandler, MouseEvent, Component} from 'react';
import './CharComponent.scss';

interface CharComponentProperties {
    readonly char: string,
    readonly clickHandler?: EventHandler<MouseEvent>
}

class CharComponent extends Component<CharComponentProperties> {

    render() {
        return (
            <div className="CharComponent" onClick={this.props.clickHandler}>
                {this.props.char}
            </div>
        );
    }
}

export default CharComponent;
