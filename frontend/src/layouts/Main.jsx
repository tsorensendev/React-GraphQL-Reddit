import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Navbar from '../components/Navbar/Navbar';
import Sidebar from '../components/Navbar/Sidebar';
import NavbarStyles from '../assets/jss/styles/NavbarStyles';

import mainRoutes from '../routes/mainRoutes';

const switchRoutes = (
  <Switch>
    {mainRoutes.map((prop, key) => {
      if (prop.redirect) {
        return <Redirect from={prop.path} to={prop.pathTo} key={key} />;
      }
      if (prop.collapse) {
        return prop.views.map((prop, key) => <Route path={prop.path} component={prop.component} key={key} />);
      }
      return <Route path={prop.path} component={prop.component} key={key} />;
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
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Navbar />
        <Sidebar open={open} classes={classes} closeSidebar={this.closeSidebar} />
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
};

export default withRouter(withStyles(NavbarStyles)(Main));
