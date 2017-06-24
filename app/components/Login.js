import React, { Component } from "react";
import RaisedButton from 'material-ui/RaisedButton';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';

class Login extends Component {

  signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log('User signed out.');
    });
  }
  render() {
    return (
      <div id="login">
        <div className="g-signin2" data-onsuccess="onSignIn"></div>
        <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
            <RaisedButton onClick = {this.signOut} label="Sign out" />
        </MuiThemeProvider>
      </div>
    );
  }
}

export default Login;
