import React, { Component } from "react";
import TextField from 'material-ui/TextField';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';

class Search extends Component {
  render() {
  return (
    <div id="search">
    <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
    <TextField
      hintText="ex: Wood Stork"
      floatingLabelText="Search"
    />
    </MuiThemeProvider>
    </div>
  );
  }
}

export default Search;