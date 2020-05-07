import React from 'react';
import './UserOutput.scss'

const UserOutput = (probs) => {
    return (
        <div className="UserOutput">
            <p>User: {probs.username}</p>
            <p>second</p>
        </div>
    );
}

export default UserOutput;
