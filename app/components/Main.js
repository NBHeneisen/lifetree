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
    this.state = {
      open: false,
      currentSearch: "Homo sapiens"
    };
    this.handleToggle = this.handleToggle.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }



  searchSet(newSearch) {
    this.setState({
      currentSearch: newSearch
    })
  }

  handleToggle () {
    this.setState({open: !this.state.open});
    console.log("Toggled. Is drawer open? " + this.state.open);
  }

  
  handleClose () {
    this.setState({open: false})
    console.log("Closed. Is drawer open? " + this.state.open);
  };



  render() {
    return (
      <div id="main">
        <SpeciesSearch searchSet={this.searchSet} />
        <Login />
        
        <h1
          label="Toggle Drawer"
          onClick={this.handleToggle}>
          {this.state.currentSearch}
        </h1>
        <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <Drawer open={this.state.open} width={325}>
          <MenuItem>Menu Item</MenuItem>
          <MenuItem>Menu Item 2</MenuItem>
        </Drawer>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default Main;