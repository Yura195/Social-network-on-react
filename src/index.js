import reportWebVitals from "./reportWebVitals";
import "./index.css";
import state, { subscribe } from "./store/state";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { addPost, updateNewPostText } from "./store/state";
import { BrowserRouter } from "react-router-dom";

let rerender = (state) => {
  ReactDOM.render(
    <BrowserRouter>
      <React.StrictMode>
        <App 
        state={state} 
        addPost={addPost}
        updateNewPostText={updateNewPostText}
        />
      </React.StrictMode>
      </BrowserRouter>, document.getElementById('root')
  );
}

rerender(state);
subscribe(rerender);

reportWebVitals();
