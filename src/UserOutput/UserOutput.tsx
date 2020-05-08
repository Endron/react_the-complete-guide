import React, {Component} from 'react';
import cssStyles from './UserOutput.module.scss'

interface UserOutputProperties {
    readonly username: string
}

class UserOutput extends Component<UserOutputProperties> {

    render() {
        return (
            <div className={cssStyles.UserOutput}>
                <p>User: {this.props.username}</p>
                <p>second</p>
            </div>
        );
    }
}

export default UserOutput;
