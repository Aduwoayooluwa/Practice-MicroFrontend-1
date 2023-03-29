import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";
import Header from "./Header";

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <Header app={'Demo'}/>
    <div>Name: demo</div>
    <div>Framework: react</div>
    <div>Language: TypeScript</div>
    <div>CSS: Tailwind</div>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
