import React from 'react';
import { Link } from 'react-router-dom';
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

const Navbar = (props) => {
  const { classes, open, openSidebar } = props;
  return (
    <AppBar
      position="absolute"
      className={classNames(classes.appBar, open && classes.appBarShift)}
    >
      <Toolbar disableGutters={!open}>
        <IconButton
          color="inherit"
          aria-label="Open drawer"
          onClick={openSidebar}
          className={classNames(classes.menuButton, open && classes.hide)}
        >
          <MenuIcon />
        </IconButton>
        <Typography className={classes.flex} variant="title" color="inherit" noWrap>
          <Link to="/main" style={{ textDecoration: 'none', color: 'white' }}>
            Reddit Clone
          </Link>
        </Typography>
        <Link to="/main/signup" style={{ textDecoration: 'none', color: 'white' }}>
          <Button color="inherit">
          Signup
          </Button>
        </Link>
        <Link to="/main/login" style={{ textDecoration: 'none', color: 'white' }}>
          <Button color="inherit">
          Login
          </Button>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

Navbar.propTypes = {
  classes: PropTypes.object.isRequired,
  open: PropTypes.bool.isRequired,
  openSidebar: PropTypes.func.isRequired,
};

export default withStyles(NavbarStyles, { withTheme: true })(Navbar);
