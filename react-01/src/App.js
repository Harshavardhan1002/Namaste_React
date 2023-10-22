import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";




const AppLayout = () => {
  return (
    <div className="app">
      <Header/>
      <Body/>
    </div>
  )
};

const page = ReactDOM.createRoot(document.getElementById("root"));
page.render(<AppLayout />);
