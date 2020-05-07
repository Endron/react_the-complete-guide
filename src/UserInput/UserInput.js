import React from 'react';
import './UserInput.scss';

function UserInput(probs) {
    const style = {
        'width': '80%'
    }

    return(
        <div className="UserInput" style={style}>
            <input type="text" onChange={probs.handler} value={probs.initialValue}/>
        </div>
    );
}

export default UserInput;