import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { mailFolderListItems, otherMailFolderListItems } from './tileData';


const Sidebar = (props) => {
  const {
    classes,
    open,
    theme,
    closeSidebar,
  } = props;
  return (
    <Drawer
      variant="permanent"
      open={open}
      classes={{ paper: classNames(classes.drawerPaper, !open && classes.drawerPaperClose) }}
    >
      <div className={classes.toolbar}>
        <IconButton onClick={closeSidebar}>
          {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
        </IconButton>
      </div>
      <Divider />
      <List>{mailFolderListItems}</List>
      <Divider />
      <List>{otherMailFolderListItems}</List>
    </Drawer>
  );
};

Sidebar.propTypes = {
  open: PropTypes.bool.isRequired,
  theme: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  closeSidebar: PropTypes.func.isRequired,
};

export default Sidebar;
