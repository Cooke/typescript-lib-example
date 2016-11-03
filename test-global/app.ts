/// <reference path="../lib/build/geometrics.d.ts" />
/// <reference path="../lib/node_modules/@types/react/index.d.ts" />
/// <reference path="../lib/node_modules/@types/react-dom/index.d.ts" />

window.onload = () => {
    ReactDOM.render(
        React.createElement(geometrics.Square, { size: 123 }), 
        document.getElementById("react-target"));
}