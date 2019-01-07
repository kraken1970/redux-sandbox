import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";

import App from "./components/app";

import reducer from "./reducer";
// import * as actions from "./actions";

const store = createStore(reducer);

// const { inc, dec, rnd } = bindActionCreators(actions, dispatch);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
