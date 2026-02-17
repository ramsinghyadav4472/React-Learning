import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
// import ArrayObj from "./component/array-obj";
// import Todo from "./component/todo";
// import Timer from "./component/timer";
import FetchApi from "./component/fetchapi";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <FetchApi />
  </React.StrictMode>
);
