import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./got/components/App";
import { BrowserRouter as Router } from "react-router-dom";
import "./styles.css";
import { Provider } from "react-redux";
import { store } from "./core/store/store";

ReactDOM.createRoot(document.querySelector(".container") as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>
);
