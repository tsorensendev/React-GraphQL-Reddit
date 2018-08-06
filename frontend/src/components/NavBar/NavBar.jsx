import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
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
        <AppBar className={classes.navMain} position="static">
          <Toolbar>
            <IconButton
              className={classes.menuButton}
              color="inherit"
              aria-label="Menu"
              onClick={this.openSidebar}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="title"
              color="inherit"
              className={classes.flex}
            >
              Reddit Clone
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
          <Sidebar open={open} />
        </AppBar>
      </div>
    );
  }
}

export default withStyles(NavbarStyles)(Navbar);
