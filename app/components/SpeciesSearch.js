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
    this.state = {
      inputValue: ""
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }
  handleInputChange(event) {
    this.setState({ inputValue: event.target.value });
  }
  handleButtonClick() {
    const searchCriteria = this.state.inputValue;
  API.getSpeciesInfo(searchCriteria).then(this.props.getSpeciesInfo);
    this.setState({ inputValue: "" });
  }

  // searchSpecies () {
  //   axios.get('http://webservice.catalogueoflife.org/col/webservice?name=Mycteria americana&format=json&response=full')
  //   .then(function (response) {
  //     console.log(response.data.results);
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //   });
  // }

  render() {
    return (
      <div id="search">
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
      <TextField
        onChange={this.handleInputChange}
        value={this.state.inputValue}
        hintText="ex: Wood Stork"
        floatingLabelText="Search"
      />
      </MuiThemeProvider>
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <IconButton onClick={this.handleButtonClick}>
          <Search />
        </IconButton>
      </MuiThemeProvider>
      </div>
    );
  }
}

export default SpeciesSearch;