import React, {Component} from 'react';
import './UserOutput.scss'

interface UserOutputProperties {
    readonly username: string
}

class UserOutput extends Component<UserOutputProperties> {

    render() {
        return (
            <div className="UserOutput">
                <p>User: {this.props.username}</p>
                <p>second</p>
            </div>
        );
    }
}

export default UserOutput;
