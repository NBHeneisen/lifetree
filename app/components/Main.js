import React, { Component } from "react";
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import SpeciesSearch from './SpeciesSearch.js';
import Login from './Login.js';

class Main extends Component {
  render() {
    return (
      <div id="main">
        <SpeciesSearch />
        <Login />
      </div>
    );
  }
}

export default Main;