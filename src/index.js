import React from "react";
//index.jsはHMTLにコンポーネントを反映する役割がある
import ReactDom from "react-dom";
import App from "./App.jsx";

ReactDom.render(<App />, document.getElementById("root"));
