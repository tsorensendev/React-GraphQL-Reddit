import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';

import SidebarStyles from '../../assets/jss/styles/sidebarStyles';

class Sidebar extends Component {
  render() {
    const { classes, open } = this.props;
    return (
      <Drawer open={open} className={classes.drawerMain}>

      </Drawer>
    );
  };
}

export default withStyles(SidebarStyles)(Sidebar);
