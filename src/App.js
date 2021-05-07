import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Test1 from "./views/Test";
import Test2 from "./views/Test2";
import Test3 from "./views/Test3";
import Test4 from "./views/Test4";

import Demo from "./views/demo1/index.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Demo></Demo>
        {/* <div className="line">
          <Test1></Test1>
        </div> */}
        {/* <div className="line">
          <Test2></Test2>
        </div>
        <div className="line">
          <Test3></Test3>
        </div>
        <div className="line">
          <Test4></Test4>
        </div> */}
      </header>
    </div>
  );
}

export default App;
