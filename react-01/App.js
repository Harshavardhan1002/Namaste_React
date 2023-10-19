import React from "react";
import ReactDOM from "react-dom";

const Title = () => {
  return <h1 className="container1">Namaste 1</h1>;
};

const Heading2 = () => (
  <div>
    {Title()}
    <Title />
    <h2>Namaste 2</h2>
  </div>
);

const page = ReactDOM.createRoot(document.getElementById("root"))
page.render(<Heading2/>)
