import React from "react";

const KeyboardPanel = (props) => {
    function handleKeyPress(event) {
        console.log(event.key);
    }
    
    return (
        <input onKeyPress={handleKeyPress} autofocus="true" style={{visibility:'hidden'}}/>
    );
}

export default KeyboardPanel; 