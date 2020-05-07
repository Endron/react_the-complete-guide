import React from 'react';
import './CharComponent.scss';

const CharComponent = (props) => {
    return (
        <div className="CharComponent" onClick={props.clickHandler}>
            {props.char}
        </div>
    );
}

export default CharComponent;