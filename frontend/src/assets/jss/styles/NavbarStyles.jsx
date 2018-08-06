import { defaultFont, container, primaryColor } from '../primary-styles';

const NavbarStyles = {
  navMain: {
    backgroundColor: primaryColor,
    ...defaultFont,
  },
  root: {
    flexGrow: 1,
  },
  flex: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

export default NavbarStyles;
