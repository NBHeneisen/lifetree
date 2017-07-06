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
import API from '../utils/API';

class SpeciesSearch extends Component {
  constructor() {
    super();
    this.state = {
      inputValue: "",
      speciesName: "",
      commonName: "",
      speciesObject: {},
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleInputChange(event) {
    this.setState({ inputValue: event.target.value });
  }

  handleButtonClick() {
    var species = this.state.inputValue;
    this.setState({
      speciesName: species
    })
    API.getSpeciesInfo(species)
    .then((speciesData) => {
      this.setState({
        speciesName: speciesData.data.results[0].accepted_name.name,
        commonName: speciesData.data.results[0].accepted_name.common_names[0].name,
        speciesObject: speciesData,
      });
      console.log(this.state.speciesObject);
      this.props.setParent(this.state.speciesName, this.state.commonName, this.state.speciesObject);
    });
    this.setState({ inputValue: "" });
  }

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