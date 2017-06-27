import React from "react";
import ReactDOM from "react-dom";
import Main from "./components/Main";
import injectTapEventPlugin from 'react-tap-event-plugin';
import routes from "./config/routes";
injectTapEventPlugin();
ReactDOM.render(routes, document.getElementById("app"));
