import React from "react";
import ReactDOM from "react-dom";
import Main from "./components/Main";
import injectTapEventPlugin from 'react-tap-event-plugin';
//import routes from "./config/routes";
injectTapEventPlugin();
const App = props => (
  <div>
    <Main />
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));
