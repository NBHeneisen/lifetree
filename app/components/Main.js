import React, { Component } from "react";
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import SpeciesSearch from './SpeciesSearch.js';
import Login from './Login.js';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';


class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {open: false};
  }
  
  handleToggle () {
     this.setState({open: !this.state.open});
  }

  render() {
    return (
      <div id="main">
        <SpeciesSearch />
        <Login />
        <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
          <RaisedButton
            label="Toggle Drawer"
            onClick={this.handleToggle}
          />
        </MuiThemeProvider>
        <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <Drawer open={this.state.open}>
          <MenuItem>Menu Item</MenuItem>
          <MenuItem>Menu Item 2</MenuItem>
        </Drawer>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default Main;