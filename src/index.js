import React from "react";
import ReactDOM from "react-dom";

const customStyle = {
  color: "red",
  fontSize: "20px",
  border: "1px solid black"
};

customStyle.fontSize = "30px";
customStyle.color = "Blue";
customStyle.border = "2px dotted magenta";

ReactDOM.render(
  <h1 style={customStyle}>Hello World!</h1>,
  document.getElementById("root")
);

//The Beauty of React inline styling is it lets us change the customstyles on the fly
