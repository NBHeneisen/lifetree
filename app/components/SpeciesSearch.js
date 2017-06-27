import React, { Component } from "react";
import TextField from 'material-ui/TextField';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';
import axios from 'axios';
import SvgIcon from 'material-ui/SvgIcon';
import Search from 'material-ui/svg-icons/action/search';
import IconButton from 'material-ui/IconButton';

class SpeciesSearch extends Component {
  constructor() {
    super();
    this.searchSpecies = this.searchSpecies.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  searchSpecies () {
    console.log("searching species!");
    axios.get('http://webservice.catalogueoflife.org/col/webservice?name=Mycteria americana&format=json&response=full')
    .then(function (response) {
      console.log(response.data.results);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  _onChange (e) {
    typeof(e);
    return e;
  }

  handleClick () {
    this.searchSpecies();
  }

  render() {
    return (
      <div id="search">
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
      <TextField
        onChange={this._onChange}
        hintText="ex: Wood Stork"
        floatingLabelText="Search"
      />
      </MuiThemeProvider>
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <IconButton onClick={this.handleClick}>
          <Search />
        </IconButton>
      </MuiThemeProvider>
      </div>
    );
  }
}

export default SpeciesSearch;