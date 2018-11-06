import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Appbar from 'material-ui/AppBar';
import { List, listItem, ListItem } from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';

class Confirm extends Component {
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
    const {
      values: { firstName, lastName, email, occupation, city, bio }
    } = this.props;

    return (
      <MuiThemeProvider>
        <React.Fragment>
          <Appbar title="Confirm User Data" />
          <List>
            <ListItem primaryText="First Name" secondaryText={firstName} />
            <ListItem primaryText="Last Name" secondaryText={lastName} />
            <ListItem primaryText="email" secondaryText={email} />
            <ListItem primaryText="occupation" secondaryText={occupation} />
            <ListItem primaryText="city" secondaryText={city} />
            <ListItem primaryText="bio" secondaryText={bio} />
          </List>
          <br />
          <RaisedButton
            label="Confirm & Continue"
            primary={true}
            style={styles.button}
            onClick={this.continue}
          />
          <RaisedButton
            label="back"
            primary={false}
            style={styles.button}
            onClick={this.back}
          />
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

const styles = {
  button: {
    margin: 15
  }
};
export default Confirm;
