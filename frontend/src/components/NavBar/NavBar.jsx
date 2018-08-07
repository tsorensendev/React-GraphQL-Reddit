import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import NavbarStyles from '../../assets/jss/styles/NavbarStyles';
import Sidebar from './Sidebar';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  openSidebar = () => {
    this.setState({ open: true });
  };

  closeSidebar = () => {
    this.setState({ open: false });
  };

  render() {
    const { open } = this.state;
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar
          position="absolute"
          className={classNames(classes.appBar, open && classes.appBarShift)}
        >
          <Toolbar disableGutters={!open}>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.openSidebar}
              className={classNames(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <Typography className={classes.flex} variant="title" color="inherit" noWrap>
              Reddit Clone
            </Typography>
            <Button color="inherit">
            Signup
            </Button>
            <Button color="inherit">
            Login
            </Button>
          </Toolbar>
        </AppBar>
        <Sidebar open={open} classes={classes} closeSidebar={this.closeSidebar} />
      </div>
    );
  }
}

Navbar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(NavbarStyles, { withTheme: true })(Navbar);
