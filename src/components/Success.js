import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Appbar from 'material-ui/AppBar';

class Success extends Component {
  continue = e => {
    e.preventDefault();
    // process form to api (express flask python
    this.props.nextStep();
  };
  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };
  render() {
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <Appbar title="Success" colorPrimary />
          <h1>Thank You For Your Submissions</h1>
          <p>You will recieve an email with further instructions</p>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

export default Success;
