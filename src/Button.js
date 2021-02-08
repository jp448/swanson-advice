import React from "react";
import "./Button.css"

function Button({getRandomQuote, text}) {

    return(
        <button className="Button" onClick={getRandomQuote}>{text}</button>
    );
}

export default Button;