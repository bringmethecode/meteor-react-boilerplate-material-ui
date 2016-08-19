import React from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import { red500 } from 'material-ui/styles/colors';

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
  }

  handleToggle() {
    this.setState({open: !this.state.open});
  }

  handleClose() {
    this.setState({open: false});
  }

  render() {
    return (
      <div>
        <AppBar
          style={{backgroundColor: red500}}
          title="Quick Menu"
          onLeftIconButtonTouchTap={this.handleToggle.bind(this)}
        />

        <Drawer
          open={this.state.open}
          docked={false}
          onRequestChange={(open) => this.setState({ open })}
        >
          <MenuItem onTouchTap={this.handleClose.bind(this)}>Menu Item</MenuItem>
          <MenuItem onTouchTap={this.handleClose.bind(this)}>Menu Item 2</MenuItem>
        </Drawer>
      </div>
    );
  }
}
