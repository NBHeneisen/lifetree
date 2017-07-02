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
      currentSearch: "Homo sapiens",
      commonName: "Human"
    };
    this.handleToggle = this.handleToggle.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.setParent = this.setParent.bind(this);
  }



  setParent(current, common) {
    this.setState({
      currentSearch: current,
      commonName: common
    });
  }

  handleToggle () {
    this.setState({open: !this.state.open});
  }

  
  handleClose () {
    this.setState({open: false});
  };



  render() {
    return (
      <div id="main">
        <SpeciesSearch setParent={this.setParent} />
        <Login />
        
        <h1
          label="Toggle Drawer"
          onClick={this.handleToggle}>
          {this.state.currentSearch}
        </h1>
        <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <Drawer open={this.state.open} width={325}>
          <div className="species data">
            <h3>{this.state.commonName}</h3>
            <h4>{this.state.currentSearch}</h4>
            <MenuItem>More Info</MenuItem>
          </div>
        </Drawer>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default Main;