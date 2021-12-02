import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// We need to connect our react application to our store.
// Do this on your highest level component, aka, this one

// Steps to connect our app
// 1. import the store from our store file
// 2. import Provider from react-redux
// 3. wrap your app in the provider

ReactDOM.render(<App />, document.getElementById("root"));
