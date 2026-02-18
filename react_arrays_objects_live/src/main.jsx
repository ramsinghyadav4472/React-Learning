import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
// import ArrayObj from "./component/array-obj";
// import Todo from "./component/todo";
// import Timer from "./component/timer";
// import FetchApi from "./component/fetchapi";
import WeatherFetchApi from "./component/fetchweatherapi";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <WeatherFetchApi />
  </React.StrictMode>
);
