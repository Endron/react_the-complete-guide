import React, {EventHandler, MouseEvent, Component} from 'react';
import cssStyles from './CharComponent.module.scss';

interface CharComponentProperties {
    readonly char: string,
    readonly clickHandler?: EventHandler<MouseEvent>
}

class CharComponent extends Component<CharComponentProperties> {

    render() {
        return (
            <div className={cssStyles.CharComponent} onClick={this.props.clickHandler}>
                {this.props.char}
            </div>
        );
    }
}

export default CharComponent;
