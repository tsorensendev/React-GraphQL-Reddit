import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';

import SidebarStyles from '../../assets/jss/styles/sidebarStyles';

const Sidebar = props => {
  const { classes, open } = props;
  return (
    <Drawer open={open} className={classes.drawerMain}>

    </Drawer>
  );
};


export default withStyles(SidebarStyles)(Sidebar);
