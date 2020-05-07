import React from 'react';
import './CharComponent.scss';

const CharComponent = (props) => {
    return (
        <div className="CharComponent">
            {props.char}
        </div>
    );
}

export default CharComponent;