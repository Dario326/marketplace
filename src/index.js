import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/configureStore";
import "./index.css";
import { AppRouter } from "./router/route";
import { unregister as unregisterServiceWorker } from "./serviceWorker";
import jquery from "jquery";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/animate.css/animate.min.css";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import "./styles/styles.css";
window.$ = window.jQuery = jquery;




const store = configureStore();

ReactDOM.render(
    <AppRouter store={store} />
    , document.getElementById("root")
);
unregisterServiceWorker();