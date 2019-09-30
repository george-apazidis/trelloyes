import React from "react";
import ReactDOM from "react-dom";
import ShoppingListApp from "./ShoppingListApp";
import App from "./App"
import "./index.css";
import STORE from "./STORE.js";

// ReactDOM.render(<App store={STORE} />, document.getElementById("root"));
// ReactDOM.render(<ShoppingListApp  />, document.getElementById("root"));

ReactDOM.render(<App />, document.getElementById("root"));