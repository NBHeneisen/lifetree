import React, { Component } from "react";

class Login extends Component {
  render() {
  return (
    <div id="login">
        <div className="g-signin2" data-onsuccess="onSignIn"></div>
    </div>
  );
  }
}

export default Login;