import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Navbar from '../components/Navbar/Navbar';
import Sidebar from '../components/Navbar/Sidebar';
import Signup from '../components/AuthPages/SignupForm';
import NavbarStyles from '../assets/jss/styles/NavbarStyles';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  openSidebar = () => {
    this.setState({ open: true });
  }

  closeSidebar = () => {
    this.setState({ open: false });
  }

  render() {
    const { open } = this.state;
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Navbar />
        <Sidebar open={open} classes={classes} closeSidebar={this.closeSidebar} />
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Signup />
        </main>
      </div>
    );
  }
}

Main.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(NavbarStyles)(Main);
