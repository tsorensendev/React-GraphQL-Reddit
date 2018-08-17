import React, { Component } from 'react';
import {
  Switch,
  Route,
  Redirect,
  withRouter,
} from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Navbar from '../components/Navbar/Navbar';
import Sidebar from '../components/Navbar/Sidebar';
import NavbarStyles from '../assets/jss/styles/NavbarStyles';

import mainRoutes from '../routes/mainRoutes';

const switchRoutes = (
  <Switch>
    {mainRoutes.map((route) => {
      if (route.redirect) {
        return <Redirect from={route.path} to={route.pathTo} key={route.pathTo} />;
      }
      if (route.collapse) {
        return route.views.map(view => <Route path={view.path} component={view.component} key={view.path} />);
      }
      return <Route path={route.path} component={route.component} key={route.path} />;
    })}
  </Switch>
);

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  getRoute = () => {
    const { location } = this.props;
    return location.pathname;
  }

  openSidebar = () => {
    this.setState({ open: true });
  }

  closeSidebar = () => {
    this.setState({ open: false });
  }

  render() {
    const { open } = this.state;
    const { classes, theme } = this.props;
    return (
      <div className={classes.root}>
        <Navbar open={open} openSidebar={this.openSidebar} />
        <Sidebar theme={theme} open={open} classes={classes} closeSidebar={this.closeSidebar} />
        <main className={classes.content}>
          <div className={classes.toolbar} />
          {this.getRoute()
            ? (
              <div>
                {switchRoutes}
              </div>
            ) : null
          }
        </main>
      </div>
    );
  }
}

Main.propTypes = {
  classes: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withRouter(withStyles(NavbarStyles, { withTheme: true })(Main));
