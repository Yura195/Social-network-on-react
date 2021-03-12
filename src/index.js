import reportWebVitals from "./reportWebVitals";
import "./index.css";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import store from "./redux/redux-store";

let rerender = () => {
  ReactDOM.render(
    <BrowserRouter>
      <React.StrictMode>
        <App store={store}/>
      </React.StrictMode>
    </BrowserRouter>,
    document.getElementById("root")
  );
};

rerender(store.getState());

store.subscribe(() => {
  let state = store.getState();
  rerender(state);
});

reportWebVitals();
