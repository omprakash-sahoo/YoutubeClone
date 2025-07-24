import React from "react";
import ReactDOM from "react-dom/client";
import Head from "./Component/Head";
import Body from "./Component/Body";

const App = () => {
  return (
    <div>
      <Head />
      <Body />
    </div>
  );
};

const rootElement = document.getElementById("root");

const root = ReactDOM.createRoot(rootElement);
root.render(<App />);
