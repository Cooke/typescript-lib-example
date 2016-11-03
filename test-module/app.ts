import * as React from "react";
import * as ReactDOM from "react-dom";
import * as geometrics from "../lib/build/geometrics";

window.onload = () => {
    ReactDOM.render(
        React.createElement(geometrics.Square, { size: 123 }), 
        document.getElementById("react-target"));
}