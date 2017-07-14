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
import d3wrapjs from '../utils/d3wrap';
import d3Wrap from 'react-d3-wrap';
import * as d3 from 'd3';

class SpeciesSearch extends Component {
  constructor() {
    super();
    this.state = {
      inputValue: "",
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
       d3.select(".d3-wrap").select("g").attr("id","firstView");
       d3.select("#firstView").remove();
      //d3.select(".d3-wrap").selectAll("svg").remove();
      this.setState({
        speciesObject: speciesData,
      });
      console.log(this.state.speciesObject);
      this.props.setParent(this.state.speciesObject.data);
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