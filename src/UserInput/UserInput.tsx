import React, {Component, EventHandler, ChangeEvent} from 'react';
import cssStyles from './UserInput.module.scss';

interface UserInputProperties {
    readonly initialValue: string,
    readonly handler?: EventHandler<ChangeEvent<HTMLInputElement>>
}

class UserInput extends Component<UserInputProperties> {

    render() {
        const style = {
            'width': '80%'
        }
    
        return(
            <div className={cssStyles.UserInput} style={style}>
                <input 
                    type="text" 
                    onChange={this.props.handler} 
                    value={this.props.initialValue}
                />
            </div>
        );
    }
}

export default UserInput;
